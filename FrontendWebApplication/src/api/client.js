const DEFAULT_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  process.env.VITE_API_BASE_URL ||
  'http://localhost:8000';

// PUBLIC_INTERFACE
export function getApiBaseUrl() {
  /** Returns the API base URL from environment variables or default */
  return DEFAULT_BASE_URL.replace(/\/$/, '');
}

// PUBLIC_INTERFACE
export async function apiGet(path, params = {}) {
  /** Performs a GET request to the backend API and returns JSON. Throws on HTTP errors. */
  const url = new URL(`${getApiBaseUrl()}${path}`);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && `${v}`.length > 0) {
      url.searchParams.set(k, v);
    }
  });
  const res = await fetch(url.toString(), {
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return res.json();
}
