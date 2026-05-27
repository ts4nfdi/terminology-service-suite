"use client";

import {
  EuiButton,
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

      {requestState === "success" && (
        <>
          <EuiText color="success">Request submitted successfully.</EuiText>
          <div>{`Code: ${code}`}</div>
          <p>{`Please use this link to login to your account: `}</p>
          <a
            href="https://github.com/login/device"
            target="_blank"
            onClick={submitTermRequest}
          >
            https://github.com/login/device
          </a>
        </>
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
