"use client";

import {
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiCallOut,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiLoadingSpinner,
  EuiPanel,
  EuiProvider,
  EuiSpacer,
  EuiText,
  EuiTextArea,
} from "@elastic/eui";
import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { TermRequestProps } from "../../../app";

type CodeApiResp = {
  _result: { code: string; device_code: string };
};

type TermRequestApiResp = {
  _result: {
    status: "success" | "pending" | "slow_down" | "denied";
    issue_url: string;
  };
};

type AgentStartResp = { websocket_path: string };
type AgentEvent = {
  type:
    | "connected"
    | "agent_started"
    | "progress"
    | "question"
    | "done"
    | "error"
    | "cancelled";
  message?: string;
  ontology?: string;
  parent_label?: string;
  parent_iri?: string;
  error?: string;
};

type Message = { role: "user" | "assistant"; text: string };

function RequiredLabel({ children }: { children: string }) {
  return (
    <span>
      {children} <span style={{ color: "#bd271e" }}>*</span>
    </span>
  );
}

function TermRequest({
  ontologyId,
  aiAssistUrl = "http://localhost",
}: TermRequestProps) {
  const [targetOntology, setTargetOntology] = useState(ontologyId);
  const [parentTerm, setParentTerm] = useState("");
  const [parentIri, setParentIri] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState<"form" | "assist">("form");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [agentState, setAgentState] = useState<
    "idle" | "loading" | "question" | "suggested" | "error"
  >("idle");
  const [suggestionAccepted, setSuggestionAccepted] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);
  const [requestState, setRequestState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [code, setCode] = useState("");
  const [deviceCode, setDeviceCode] = useState("");
  const [issueUrl, setIssueUrl] = useState("");
  const [copiedIssueUrl, setCopiedIssueUrl] = useState(false);

  useEffect(() => () => socketRef.current?.close(), []);

  const formIsComplete = Boolean(
    targetOntology.trim() &&
    parentTerm.trim() &&
    title.trim() &&
    description.trim(),
  );
  const canSubmit = formIsComplete && (mode === "form" || suggestionAccepted);

  function requestContent() {
    return [
      `Ontology: ${targetOntology}`,
      `Parent term: ${parentTerm}${parentIri ? ` (${parentIri})` : ""}`,
      "",
      description,
    ].join("\n");
  }

  async function getAuthCode() {
    if (!canSubmit) return;
    setRequestState("loading");
    try {
      const res = await fetch("http://localhost/user/login/get_code/", {
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error();
      const data = (await res.json()) as CodeApiResp;
      setCode(data._result.code);
      setDeviceCode(data._result.device_code);
      setRequestState("success");
    } catch {
      setRequestState("error");
    }
  }

  async function submitTermRequest() {
    if (!code || !deviceCode || !canSubmit) return;
    setRequestState("loading");
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const url = "http://localhost/user/login/send_term_request/";
    let data: TermRequestApiResp;
    do {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          device_code: deviceCode,
          title,
          content: requestContent(),
          repo_url: targetOntology,
        }),
      });
      if (!res.ok) {
        setRequestState("error");
        return;
      }
      data = (await res.json()) as TermRequestApiResp;
      if (
        data._result.status === "pending" ||
        data._result.status === "slow_down"
      ) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    } while (
      data._result.status === "pending" ||
      data._result.status === "slow_down"
    );

    if (data._result.status === "success") {
      setIssueUrl(data._result.issue_url);
      setRequestState("success");
    } else {
      setRequestState("error");
    }
  }

  async function startAiAssist() {
    if (!chatInput.trim()) return;
    const userMessage = chatInput.trim();
    setMessages((current) => [...current, { role: "user", text: userMessage }]);
    setChatInput("");

    if (
      agentState === "question" &&
      socketRef.current?.readyState === WebSocket.OPEN
    ) {
      socketRef.current.send(
        JSON.stringify({ type: "user_message", message: userMessage }),
      );
      setAgentState("loading");
      return;
    }

    setAgentState("loading");
    setSuggestionAccepted(false);

    try {
      socketRef.current?.close();
      const baseUrl = aiAssistUrl.replace(/\/$/, "");
      const res = await fetch(`${baseUrl}/demos/agent/start/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: [
            userMessage,
            title && `Requested term label: ${title}`,
            description && `Requested term definition: ${description}`,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });
      if (!res.ok) throw new Error("The AI assistant could not be started.");
      const data = (await res.json()) as AgentStartResp;
      const socketBase = baseUrl.replace(/^http/, "ws");
      const socket = new WebSocket(`${socketBase}${data.websocket_path}`);
      socketRef.current = socket;
      socket.onmessage = ({ data: payload }) => {
        const event = JSON.parse(payload) as AgentEvent;
        if (
          event.type === "progress" &&
          event.message &&
          !/^Running step \d+/i.test(event.message)
        ) {
          setMessages((current) => [
            ...current,
            { role: "assistant", text: event.message! },
          ]);
        }
        if (event.type === "question" && event.message) {
          setAgentState("question");
          setMessages((current) => [
            ...current,
            { role: "assistant", text: event.message! },
          ]);
        }
        if (event.type === "done") {
          if (
            event.error ||
            !event.ontology ||
            !event.parent_label ||
            !event.parent_iri
          ) {
            setAgentState("error");
            setMessages((current) => [
              ...current,
              {
                role: "assistant",
                text:
                  event.error ||
                  "No suitable ontology and parent term were found.",
              },
            ]);
          } else {
            setTargetOntology(event.ontology);
            setParentTerm(event.parent_label);
            setParentIri(event.parent_iri);
            setAgentState("suggested");
            setMessages((current) => [
              ...current,
              {
                role: "assistant",
                text: `Suggested ontology: ${event.ontology}\nParent term: ${event.parent_label}\nIRI: ${event.parent_iri}`,
              },
            ]);
          }
          socket.close();
        }
        if (event.type === "error" || event.type === "cancelled") {
          setAgentState("error");
          setMessages((current) => [
            ...current,
            {
              role: "assistant",
              text: event.message || "The AI assistant stopped.",
            },
          ]);
        }
      };
      socket.onerror = () => setAgentState("error");
    } catch (error) {
      setAgentState("error");
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text:
            error instanceof Error
              ? error.message
              : "The AI assistant could not be started.",
        },
      ]);
    }
  }

  if (requestState === "loading") {
    return (
      <EuiPanel data-testid="term-request">
        <EuiFlexGroup
          alignItems="center"
          justifyContent="center"
          gutterSize="s"
        >
          <EuiFlexItem grow={false}>
            <EuiLoadingSpinner size="m" />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText size="s">Submitting request...</EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    );
  }

  return (
    <EuiPanel
      data-testid="term-request"
      style={{ width: "100%", maxWidth: "none", boxSizing: "border-box" }}
    >
      {requestState === "idle" && (
        <>
          {mode === "form" ? (
            <>
              <EuiFormRow
                label={<RequiredLabel>Target ontology</RequiredLabel>}
                fullWidth
              >
                <EuiFieldText
                  name="ontology"
                  value={targetOntology}
                  onChange={(e) => {
                    setTargetOntology(e.target.value);
                    setSuggestionAccepted(false);
                  }}
                  aria-required="true"
                  fullWidth
                />
              </EuiFormRow>
              <EuiFormRow
                label={<RequiredLabel>Target parent term</RequiredLabel>}
                helpText={parentIri || undefined}
                fullWidth
              >
                <EuiFieldText
                  name="parentTerm"
                  value={parentTerm}
                  onChange={(e) => {
                    setParentTerm(e.target.value);
                    setParentIri("");
                    setSuggestionAccepted(false);
                  }}
                  aria-required="true"
                  fullWidth
                />
              </EuiFormRow>
              <EuiFormRow
                label={<RequiredLabel>New term title</RequiredLabel>}
                fullWidth
              >
                <EuiFieldText
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  aria-required="true"
                  fullWidth
                />
              </EuiFormRow>
              <EuiFormRow
                label={<RequiredLabel>New term description</RequiredLabel>}
                fullWidth
              >
                <EuiTextArea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  aria-required="true"
                  fullWidth
                />
              </EuiFormRow>
              <EuiSpacer size="m" />
              <EuiFlexGroup justifyContent="spaceBetween" responsive={false}>
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty
                    onClick={() => setMode("assist")}
                    iconType="sparkles"
                  >
                    I need help choosing an ontology or parent term
                  </EuiButtonEmpty>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiButton
                    onClick={getAuthCode}
                    disabled={!canSubmit}
                    size="s"
                    iconType="logoGithub"
                    fill
                    data-ontology-id={targetOntology}
                  >
                    Submit
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </>
          ) : (
            <>
              <EuiPanel color="subdued" paddingSize="m">
                <EuiText size="s">
                  <h3>AI assistant</h3>
                  <p>
                    Describe the term, its category, and the scientific domain.
                    The assistant will suggest an ontology and an existing
                    parent term.
                  </p>
                </EuiText>
                {messages.map((message, index) => (
                  <EuiText key={index} size="s">
                    <p style={{ whiteSpace: "pre-wrap" }}>
                      <strong>
                        {message.role === "user" ? "You" : "Assistant"}:
                      </strong>{" "}
                      {message.text}
                    </p>
                  </EuiText>
                ))}
                {agentState === "loading" && <EuiLoadingSpinner size="m" />}
                {agentState !== "suggested" && (
                  <>
                    <EuiFormRow label="What term do you want to add?" fullWidth>
                      <EuiTextArea
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        disabled={agentState === "loading"}
                        fullWidth
                      />
                    </EuiFormRow>
                    <EuiButton
                      onClick={startAiAssist}
                      disabled={!chatInput.trim() || agentState === "loading"}
                      isLoading={agentState === "loading"}
                    >
                      {agentState === "question"
                        ? "Send answer"
                        : "Ask AI assistant"}
                    </EuiButton>
                  </>
                )}
              </EuiPanel>
              <EuiSpacer size="m" />
              {agentState === "suggested" && (
                <EuiCallOut title="Review the AI suggestion" color="warning">
                  <p>
                    Ontology: <strong>{targetOntology}</strong>
                    <br />
                    Parent term: <strong>{parentTerm}</strong>
                    <br />
                    Parent IRI: {parentIri}
                  </p>
                  <EuiButton
                    onClick={() => setSuggestionAccepted(true)}
                    disabled={suggestionAccepted}
                    color="warning"
                  >
                    {suggestionAccepted
                      ? "Suggestion accepted"
                      : "Accept this suggestion"}
                  </EuiButton>
                </EuiCallOut>
              )}
              {agentState === "error" && (
                <EuiCallOut title="AI assistance failed" color="danger">
                  <p>
                    Please revise your description and try again, or return to
                    the form.
                  </p>
                </EuiCallOut>
              )}
              <EuiSpacer size="m" />
              <EuiFlexGroup justifyContent="spaceBetween" responsive={false}>
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty
                    onClick={() => {
                      socketRef.current?.close();
                      setMode("form");
                    }}
                  >
                    Back to form
                  </EuiButtonEmpty>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiButton
                    onClick={getAuthCode}
                    disabled={!canSubmit}
                    size="s"
                    iconType="logoGithub"
                    fill
                  >
                    Consent and continue with GitHub
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </>
          )}
        </>
      )}

      {requestState === "success" && !issueUrl && (
        <EuiFlexGroup
          direction="column"
          alignItems="center"
          gutterSize="m"
          style={{ minHeight: 320, padding: "32px 16px", textAlign: "center" }}
        >
          <EuiFlexItem grow={false}>
            <EuiText>
              <p>GitHub Code:</p>
            </EuiText>
            <div
              style={{
                backgroundColor: "#e6f4ea",
                border: "2px solid #0b8043",
                borderRadius: 8,
                color: "#0b4f2a",
                fontSize: 28,
                fontWeight: 700,
                padding: "18px 28px",
              }}
            >
              {code}
            </div>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton
              onClick={submitTermRequest}
              href="https://github.com/login/device"
              target="_blank"
              iconType="logoGithub"
              fill
            >
              Please confirm your identity with GitHub by using the obtained
              code.
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      )}
      {requestState === "success" && issueUrl && (
        <EuiFlexGroup
          direction="column"
          alignItems="center"
          gutterSize="m"
          style={{ minHeight: 240, padding: "32px 16px", textAlign: "center" }}
        >
          <EuiFlexItem grow={false}>
            <EuiText>
              <p>Term Request has been submitted successfully.</p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
              <EuiFlexItem grow={false}>
                <a
                  href={issueUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ overflowWrap: "anywhere" }}
                >
                  {issueUrl}
                </a>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButtonIcon
                  aria-label={
                    copiedIssueUrl ? "Issue URL copied" : "Copy issue URL"
                  }
                  display="base"
                  iconType={copiedIssueUrl ? "check" : "copy"}
                  onClick={() => {
                    navigator.clipboard.writeText(issueUrl);
                    setCopiedIssueUrl(true);
                    setTimeout(() => setCopiedIssueUrl(false), 2000);
                  }}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      )}
      {requestState === "error" && (
        <EuiCallOut title="Error submitting request" color="danger">
          <p>Please try again.</p>
          <EuiButton onClick={() => setRequestState("idle")}>
            Back to form
          </EuiButton>
        </EuiCallOut>
      )}
    </EuiPanel>
  );
}

function WrappedTermRequest(props: TermRequestProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <TermRequest {...props} />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { TermRequest, WrappedTermRequest };
