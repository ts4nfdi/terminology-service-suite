"use client";

import {
  EuiButton,
  EuiButtonIcon,
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
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { TermRequestProps } from "../../../app";

type CodeApiResp = {
  _result: {
    code: string;
    device_code: string;
  };
};

type TermRequestApiResp = {
  _result: {
    status: "success" | "pending" | "slow_down" | "denied";
    issue_url: string;
  };
};

function TermRequest({ ontologyId }: TermRequestProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [requestState, setRequestState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [code, setCode] = useState("");
  const [deviceCode, setDeviceCode] = useState("");
  const [issueUrl, setIssueUrl] = useState("");
  const [copiedIssueUrl, setCopiedIssueUrl] = useState(false);

  async function getAuthCode() {
    if (!title.trim() || !content.trim()) {
      return;
    }
    setRequestState("loading");
    let url = "http://localhost/user/login/get_code/";
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      setRequestState("error");
      return;
    }
    let data = (await res.json()) as CodeApiResp;
    setCode(data["_result"]["code"]);
    setDeviceCode(data["_result"]["device_code"]);
    setRequestState("success");
  }

  async function submitTermRequest() {
    if (!code || !deviceCode) {
      return;
    }
    setRequestState("loading");
    await new Promise((resolve) => setTimeout(resolve, 10000));
    let url = "http://localhost/user/login/send_term_request/";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        device_code: deviceCode,
        title: title,
        content: content,
        repo_url: "",
      }),
    });
    if (!res.ok) {
      setRequestState("error");
      return;
    }
    let data = (await res.json()) as TermRequestApiResp;
    while (
      data["_result"]["status"] === "pending" ||
      data["_result"]["status"] === "slow_down"
    ) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          device_code: deviceCode,
          title: title,
          content: content,
          repo_url: "",
        }),
      });
      if (!res.ok) {
        setRequestState("error");
        return;
      }
      data = (await res.json()) as TermRequestApiResp;
    }
    if (data["_result"]["status"] === "success") {
      setRequestState("success");
      setIssueUrl(data["_result"]["issue_url"]);
      return;
    }
    setRequestState("error");
  }

  return (
    <EuiPanel
      data-testid="term-request"
      style={{ width: "100%", maxWidth: "none", boxSizing: "border-box" }}
    >
      {requestState === "idle" && (
        <>
          <EuiFormRow label="Title" fullWidth>
            <EuiFieldText
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              fullWidth
            />
          </EuiFormRow>

          <EuiSpacer size="m" />

          <EuiFormRow label="Content" fullWidth>
            <EuiTextArea
              name="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              required
              fullWidth
            />
          </EuiFormRow>

          <EuiSpacer size="m" />

          <EuiFlexGroup justifyContent="flexEnd" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiButton
                onClick={getAuthCode}
                size="s"
                iconType="logoGithub"
                fill
                data-ontology-id={ontologyId}
                style={{
                  backgroundColor: "#000",
                  borderColor: "#000",
                  color: "#fff",
                }}
              >
                Submit
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </>
      )}

      {requestState === "loading" && (
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
      )}

      {requestState === "success" && issueUrl === "" && (
        <EuiFlexGroup
          direction="column"
          alignItems="center"
          justifyContent="center"
          gutterSize="m"
          style={{
            minHeight: "320px",
            padding: "32px 16px",
            textAlign: "center",
          }}
        >
          <EuiFlexItem grow={false}>
            <EuiText size="m">
              <p style={{ fontSize: "20px", marginBottom: "12px" }}>
                GitHub Code:
              </p>
            </EuiText>
            <div
              style={{
                backgroundColor: "#e6f4ea",
                border: "2px solid #0b8043",
                borderRadius: "8px",
                color: "#0b4f2a",
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "1px",
                lineHeight: 1.2,
                padding: "18px 28px",
              }}
            >
              {`${code}`}
            </div>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton
              onClick={submitTermRequest}
              href={"https://github.com/login/device"}
              target="_blank"
              size="m"
              iconType="logoGithub"
              fill
              data-ontology-id={ontologyId}
              style={{
                backgroundColor: "#000",
                borderColor: "#000",
                color: "#fff",
                fontSize: "16px",
                padding: "0 20px",
              }}
            >
              Please confirm your identity with GitHub by using the obtained
              code.
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      )}
      {requestState === "success" && issueUrl !== "" && (
        <EuiFlexGroup
          direction="column"
          alignItems="center"
          justifyContent="center"
          gutterSize="m"
          style={{
            minHeight: "240px",
            padding: "32px 16px",
            textAlign: "center",
          }}
        >
          <EuiFlexItem grow={false}>
            <EuiText size="m">
              <p>Term Request has been submitted successfully.</p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup
              alignItems="center"
              justifyContent="center"
              gutterSize="s"
              responsive={false}
            >
              <EuiFlexItem grow={false} style={{ maxWidth: "100%" }}>
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
                    setTimeout(() => {
                      setCopiedIssueUrl(false);
                    }, 2000);
                  }}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      )}

      {requestState === "error" && (
        <EuiText color="danger">
          Error submitting request. Please try again.
        </EuiText>
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
