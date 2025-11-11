// src/services/animalsApi.js
import axios from "axios";

/**
 * animalsApi.js
 * Data service for My Reactive Farm.
 * - Uses Axios instance with baseURL from Vite env (VITE_API_BASE).
 * - Normalizes errors for UI.
 * - Supports pagination (MockAPI: ?page=1&limit=10).
 *
 * Required env (.env at project root):
 *   VITE_API_BASE=https://YOUR-MOCKAPI-URL   // without trailing slash
 *
 * Final resource used: `${VITE_API_BASE}/animals`
 */

// ---- Config ----
const BASE_URL = import.meta.env.VITE_API_BASE?.replace(/\/$/, "");
if (!BASE_URL) {
  // Tip friendly: keep a clear error in console if env is missing
  // (Avoid crashing UI; Farm.jsx handles loadError)
  console.warn(
    "[animalsApi] Missing VITE_API_BASE. Set it in your .env, e.g.:",
    "VITE_API_BASE=https://66xxxxxx.mockapi.io"
  );
}

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10s
});

// Optional: unwrap data in responses (so functions can just return data)
http.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(normalizeAxiosError(error))
);

/** Convert Axios/Network errors to a friendly shape */
function normalizeAxiosError(err) {
  if (err?.response) {
    // Server responded with a status outside 2xx
    const status = err.response.status;
    const message =
      err.response.data?.message ||
      err.response.data?.error ||
      `Request failed with status ${status}`;
    return new Error(message);
  }
  if (err?.request) {
    // No response (network / CORS / timeout)
    return new Error("Network error or timeout. Please check your connection.");
  }
  // Something else (config, code)
  return new Error(err?.message || "Unexpected error");
}

// ---- API methods ----

/**
 * getAnimals
 * Read list with optional pagination and sorting.
 * MockAPI supports: ?page=1&limit=10&sortBy=field&order=asc|desc
 */
export async function getAnimals({
  page = 1,
  limit = 12,
  sortBy = "createdAt",
  order = "desc",
  signal,
} = {}) {
  const url = `/animals`;
  const params = { page, limit, sortBy, order };
  const res = await http.get(url, { params, signal });
  return res.data; // array
}

/** Read one by id (optional utility) */
export async function getAnimalById(id, { signal } = {}) {
  if (!id) throw new Error("Missing animal id");
  const res = await http.get(`/animals/${id}`, { signal });
  return res.data; // object
}

/**
 * createAnimal
 * Payload example:
 * { name: "Lola", type: "cow", age: 3, weight: 250, status: "healthy" }
 */
export async function createAnimal(payload) {
  // Small client-side guard (basic)
  if (!payload?.name || !payload?.type) {
    throw new Error("Name and type are required");
  }
  const res = await http.post(`/animals`, payload);
  return res.data; // created object (with id)
}

/** Partial update (PATCH) — optional for later weeks */
export async function updateAnimal(id, patch) {
  if (!id) throw new Error("Missing animal id");
  const res = await http.put(`/animals/${id}`, patch);
  return res.data;
}

/** Delete — optional for later weeks */
export async function removeAnimal(id) {
  if (!id) throw new Error("Missing animal id");
  const res = await http.delete(`/animals/${id}`);
  return res.data;
}
