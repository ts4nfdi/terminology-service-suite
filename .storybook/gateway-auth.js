// Storybook-only authentication: credentials never enter persistent browser storage.
export const GATEWAY_URL =
  "https://terminology.services.base4nfdi.de/api-gateway/";
export const REDIRECT_URI =
  "https://terminology.services.base4nfdi.de/tss/comp/latest";
export const LOGIN_URL = `${GATEWAY_URL}auth/sso/authorize?redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

export function isGatewayRequest(input, base) {
  const url = new URL(input, base);
  const gateway = new URL(GATEWAY_URL);
  return (
    url.origin === gateway.origin && url.pathname.startsWith(gateway.pathname)
  );
}

// Intercept at the browser transport boundary so every Axios instance is covered,
// including the React library used by the HTML wrappers.
export function installGatewayTransport(target, getToken, ready) {
  const originalFetch = target.fetch.bind(target);
  target.fetch = async (input, init) => {
    const url =
      typeof input === "string" || input instanceof URL ? input : input.url;
    if (!isGatewayRequest(url, target.location.href))
      return originalFetch(input, init);
    await ready;
    const token = getToken();
    if (!token) return originalFetch(input, init);
    const headers = new Headers(
      init?.headers ?? (input instanceof Request ? input.headers : undefined),
    );
    headers.set("Authorization", `Bearer ${token}`);
    return originalFetch(input, { ...init, headers });
  };

  const prototype = target.XMLHttpRequest.prototype;
  const originalOpen = prototype.open;
  const originalSend = prototype.send;
  const originalAbort = prototype.abort;
  const originalSetHeader = prototype.setRequestHeader;
  const requests = new WeakMap();
  let settled = false;
  void ready.then(() => {
    settled = true;
  });
  prototype.open = function (method, url, ...args) {
    const result = originalOpen.call(this, method, url, ...args);
    requests.set(this, {
      gateway: isGatewayRequest(url, target.location.href),
      async: args[0] !== false,
      aborted: false,
      headers: [],
    });
    return result;
  };
  prototype.setRequestHeader = function (name, value) {
    const request = requests.get(this);
    // Defer Authorization until send, avoiding duplicate Bearer/API-key headers.
    if (request?.gateway && name.toLowerCase() === "authorization") {
      request.headers.push([name, value]);
      return;
    }
    return originalSetHeader.call(this, name, value);
  };
  prototype.abort = function () {
    const request = requests.get(this);
    if (request) request.aborted = true;
    return originalAbort.call(this);
  };
  prototype.send = function (body) {
    const request = requests.get(this);
    if (!request?.gateway) return originalSend.call(this, body);
    const send = () => {
      if (request.aborted || requests.get(this) !== request) return;
      const token = getToken();
      if (token)
        originalSetHeader.call(this, "Authorization", `Bearer ${token}`);
      else
        for (const [name, value] of request.headers)
          originalSetHeader.call(this, name, value);
      originalSend.call(this, body);
    };
    if (settled || !request.async) return send();
    void ready.then(send);
  };
  return originalFetch;
}

const stateKey = Symbol.for("tss.storybook.gatewayAuth");
const transportKey = Symbol.for("tss.storybook.gatewayTransport");

function getHostWindow(target) {
  try {
    if (target.top && target.top.location.origin === target.location.origin)
      return target.top;
  } catch {
    /* A composed Storybook may have a cross-origin parent. */
  }
  return target;
}

export function initializeGatewayAuth(target = window) {
  const host = getHostWindow(target);
  let state = host[stateKey];
  if (!state) {
    state = {
      token: null,
      expiration: 0,
      username: "",
      role: "",
      error: "",
      pending: false,
    };
    host[stateKey] = state;
    const fetch = target.fetch.bind(target);
    const callback = new URL(host.location.href);
    const code = callback.searchParams.get("code");
    callback.searchParams.delete("code");
    if (code !== null)
      host.history.replaceState(host.history.state, "", callback);
    state.pending = Boolean(code);
    state.ready = (async () => {
      if (!code) return;
      const post = async (endpoint, body) => {
        const response = await fetch(`${GATEWAY_URL}auth/sso/${endpoint}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          redirect: "error",
        });
        if (!response.ok)
          throw new Error(
            `Authentication failed (${response.status}). Please log in again.`,
          );
        return response.json();
      };
      try {
        const tokens = await post("token", {
          code,
          redirect_uri: REDIRECT_URI,
        });
        if (
          typeof tokens.access_token !== "string" ||
          typeof tokens.id_token !== "string"
        )
          throw new Error("Invalid token response. Please log in again.");
        const session = await post("login", {
          access_token: tokens.access_token,
          id_token: tokens.id_token,
        });
        const expiration = Date.parse(session.expiration);
        if (
          typeof session.token !== "string" ||
          !session.token ||
          !Number.isFinite(expiration) ||
          expiration <= Date.now()
        )
          throw new Error(
            "Invalid or expired login response. Please log in again.",
          );
        state.token = session.token;
        state.expiration = expiration;
        state.username =
          typeof session.username === "string" ? session.username : "Signed in";
        state.role = typeof session.role === "string" ? session.role : "";
      } catch (error) {
        state.error =
          error instanceof Error &&
          error.message.startsWith("Authentication failed (")
            ? error.message
            : "Login failed. Please try again.";
      } finally {
        state.pending = false;
        state.render?.();
      }
    })();
  }
  const getToken = () => {
    if (state.token && Date.now() >= state.expiration) {
      state.token = null;
      state.error = "Session expired. Please log in again.";
      state.render?.();
    }
    return state.token;
  };
  if (!target[transportKey]) {
    installGatewayTransport(target, getToken, state.ready);
    target[transportKey] = true;
  }
  if (!state.panel && host.document.body) {
    const panel = host.document.createElement("aside");
    panel.setAttribute("aria-label", "API gateway authentication");
    panel.style.cssText =
      "position:fixed;bottom:12px;right:12px;z-index:10000;background:white;color:#222;padding:10px;border:1px solid #ccc;border-radius:4px;font:14px sans-serif;box-shadow:0 2px 8px #0002";
    const status = host.document.createElement("span");
    status.setAttribute("role", "status");
    status.style.marginRight = "12px";
    const button = host.document.createElement("button");
    button.type = "button";
    button.textContent = "Login";
    button.onclick = () => host.location.assign(LOGIN_URL);
    panel.append(status, button);
    host.document.body.append(panel);
    state.panel = panel;
    state.render = () => {
      status.textContent = state.pending
        ? "Signing in…"
        : state.error ||
          (state.token
            ? `${state.username}${state.role ? ` (${state.role})` : ""}`
            : "Not signed in");
      button.disabled = state.pending;
      button.hidden = Boolean(state.token);
    };
    state.render();
    void state.ready.then(() => {
      if (state.token)
        host.setTimeout(
          () => {
            getToken();
          },
          Math.min(state.expiration - Date.now() + 1, 2147483647),
        );
    });
  }
  return state.ready;
}

// Works with both React and HTML renderers without altering story output.
export function withGatewayAuth(story) {
  void initializeGatewayAuth();
  return story();
}
