import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./index.scss";

const entryPoint = document.querySelector("#root");

ReactDOM.createRoot(entryPoint as HTMLElement).render(<App />);
