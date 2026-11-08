export const GATEWAY_URL: string;
export const REDIRECT_URI: string;
export const LOGIN_URL: string;
export function isGatewayRequest(input: string | URL, base: string): boolean;
export function installGatewayTransport(
  target: Window & typeof globalThis,
  getToken: () => string | null,
  ready: Promise<void>,
): typeof fetch;
export function initializeGatewayAuth(
  target?: Window & typeof globalThis,
): Promise<void>;
export function withGatewayAuth<T>(story: () => T): T;
