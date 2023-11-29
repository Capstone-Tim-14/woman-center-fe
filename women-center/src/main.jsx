/* eslint-disable react/no-deprecated */
import React from "react";
import { createRoot } from "react-dom/client";  // Change the import path
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
