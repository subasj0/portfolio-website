import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import App from "./App";
import { initializeInteractions } from "./interactions";
import "./index.css";
flushSync(() => createRoot(document.getElementById("root")!).render(<App />));
initializeInteractions();
