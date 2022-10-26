import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Context from "./context/Context";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <App />
  </Context>
);
