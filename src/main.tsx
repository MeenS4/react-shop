import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app"

const entryPoint = document.querySelector("#root")

ReactDOM.createRoot(entryPoint as HTMLElement).render(<App />)
