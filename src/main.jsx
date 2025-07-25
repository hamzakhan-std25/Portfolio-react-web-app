import React from "react";
import ReactDOM from "react-dom/client";
import PortfolioRouter from "./router";
import { DarkModeProvider } from "./pages/DarkModeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <PortfolioRouter />
    </DarkModeProvider>
  </React.StrictMode>
);
