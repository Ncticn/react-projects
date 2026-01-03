import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./libraries/tailwind.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
