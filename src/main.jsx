// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/** Set initial theme BEFORE first render (may still flash if CSS was already applied) */
(function setInitialTheme() {
  try {
    const stored = localStorage.getItem("theme"); // "dark" | "light" | null
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldDark);
  } catch {
    // ignore
  }
})();

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('Root element "#root" not found');
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
