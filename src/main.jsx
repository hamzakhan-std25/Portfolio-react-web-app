import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 🔥 Required for navbar toggle

import "./styles/global.css"; // ✅ Import Tailwind styles
import React from "react";
import ReactDOM from "react-dom/client";
import PortfolioRouter from './router';

ReactDOM.createRoot(
  document.getElementById("root")).render(

    < React.StrictMode >
      <PortfolioRouter /> 
    </React.StrictMode >



  );
