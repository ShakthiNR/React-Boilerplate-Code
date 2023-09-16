import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom";
const rootElm = document.getElementById("root")

if (!rootElm) throw new Error("Cannot find root element")

const root = createRoot(rootElm)

console.log("Env Var - Node Env ", process.env.NODE_ENV)

root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>

    </React.StrictMode>
)
