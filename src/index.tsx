import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { App } from "./components/app";

ReactDOM.createRoot(
  document.getElementById(".container") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
