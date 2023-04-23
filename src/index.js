import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fonts/Roboto/Roboto-Regular.ttf";
import "./fonts/Roboto/Roboto-Bold.ttf";
import "./fonts/Roboto/Roboto-Light.ttf";
import "./fonts/Roboto/Roboto-Thin.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
