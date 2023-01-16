import React from "react";
import { createRoot } from "react-dom/client";
import ContextAPIProvider from "./context/ContextAPI";
import App from "./App";
import "./style.css";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <ContextAPIProvider>
        <App />
    </ContextAPIProvider>
);