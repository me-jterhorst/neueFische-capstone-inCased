import "./index.css";
import "./styles/utility.css";
import "./styles/fonts.css";
// ============================== import components
import App from "./App";
// ============================== import requirements
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
