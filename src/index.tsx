import React from "react";
// TypeScript does not have a declaration for CSS side-effect imports.
// @ts-expect-error CSS is handled by the bundler at build time.
import "./index.css";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}