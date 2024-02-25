import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import Providers from "./providers";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Providers>
    <App />
  </Providers>
);
