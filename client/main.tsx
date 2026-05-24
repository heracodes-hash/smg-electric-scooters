import "./global.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find root container");
}

const root = createRoot(container);
root.render(<App />);
