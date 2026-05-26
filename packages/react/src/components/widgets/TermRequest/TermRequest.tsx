"use client";

import {
  EuiButton,
  EuiButtonEmpty,
  EuiCallOut,
  EuiCodeBlock,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiPanel,
  EuiProvider,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useEffect, useState } from "react";
import { TermRequestProps } from "../../../app";

const GITHUB_CLIENT_ID = "0222da3740d5eda2b5c0";
const GITHUB_SCOPES = "user,public_repo";

function getRedirectUri() {
  const origin = window.location.origin.includes("localhost")
    ? window.location.origin.replace("localhost", "127.0.0.1")
    : window.location.origin;
  return origin + window.location.pathname;
}

function buildGithubAuthUrl(redirectUri: string) {
  const searchParams = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: GITHUB_SCOPES,
  });

  return `https://github.com/login/oauth/authorize?${searchParams.toString()}`;
}

function completeGithubAuth(code: string) {
  // Replace this function with the backend call that exchanges the code.
  console.log("GitHub OAuth code received:", code);
}

function TermRequest({ ontologyRepoUrl }: TermRequestProps) {
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
  const [oauthCode, setOauthCode] = useState<string | null>(null);
  const [oauthError, setOauthError] = useState<string | null>(null);

  const redirectUri = getRedirectUri();
  const githubAuthUrl = buildGithubAuthUrl(redirectUri);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    const error =
      searchParams.get("error_description") ?? searchParams.get("error");

    if (error) {
      setOauthError(error);
      setIsAuthModalVisible(true);
    }

    if (code) {
      setOauthCode(code);
      completeGithubAuth(code);
      setIsAuthModalVisible(true);
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.hash,
      );
    }
  }, []);

  const startGithubAuth = () => {
    if (!githubAuthUrl) {
      return;
    }
  };

  return (
    <EuiPanel hasShadow={false} hasBorder paddingSize="m">
      <EuiFlexGroup direction="column" gutterSize="m">
        <EuiFlexItem>
          <EuiTitle size="s">
            <h2>Term request</h2>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText size="s">
            <p>
              Authenticate with GitHub to create a term request for this
              ontology repository.
            </p>
          </EuiText>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFormRow label="Ontology repository">
            <EuiFieldText readOnly value={ontologyRepoUrl} fullWidth />
          </EuiFormRow>
        </EuiFlexItem>

        {oauthCode && (
          <EuiFlexItem>
            <EuiCallOut
              color="success"
              iconType="check"
              title="GitHub authorization code received"
            >
              The code has been passed to the dummy auth completion function.
            </EuiCallOut>
          </EuiFlexItem>
        )}

        <EuiFlexItem grow={false}>
          <EuiButton
            iconType="logoGithub"
            fill
            onClick={() => setIsAuthModalVisible(true)}
          >
            Login with GitHub
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>

      {isAuthModalVisible && (
        <EuiModal onClose={() => setIsAuthModalVisible(false)} maxWidth={560}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>GitHub authentication</EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiText size="s">
              <p>
                Authorize this widget with GitHub. GitHub will redirect back
                here with an OAuth code.
              </p>
            </EuiText>

            <EuiSpacer size="m" />

            {oauthError && (
              <>
                <EuiCallOut
                  color="danger"
                  iconType="error"
                  title="GitHub authorization failed"
                >
                  {oauthError}
                </EuiCallOut>
                <EuiSpacer size="m" />
              </>
            )}

            {oauthCode && (
              <>
                <EuiCallOut
                  color="success"
                  iconType="check"
                  title="Authorization code"
                >
                  <EuiCodeBlock language="text" paddingSize="s" isCopyable>
                    {oauthCode}
                  </EuiCodeBlock>
                </EuiCallOut>
                <EuiSpacer size="m" />
              </>
            )}

            <EuiFormRow label="Redirect URI">
              <EuiFieldText readOnly value={redirectUri} fullWidth />
            </EuiFormRow>
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButtonEmpty onClick={() => setIsAuthModalVisible(false)}>
              Cancel
            </EuiButtonEmpty>
            <EuiButton
              fill
              iconType="logoGithub"
              href={githubAuthUrl || undefined}
              isDisabled={!githubAuthUrl}
              onClick={startGithubAuth}
            >
              Continue with GitHub
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      )}
    </EuiPanel>
  );
}

function WrappedTermRequest(props: TermRequestProps) {
  return (
    <EuiProvider colorMode="light">
      <TermRequest {...props} />
    </EuiProvider>
  );
}

export { TermRequest, WrappedTermRequest };
