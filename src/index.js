import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./weather";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather />
    <App />
  </StrictMode>
);
