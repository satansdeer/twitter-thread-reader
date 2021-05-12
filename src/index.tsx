import React from "react";
import ReactDOM from "react-dom";
import "./client/index.css";
import App from "./client/App";
import reportWebVitals from "./reportWebVitals";
import { LayoutContainer } from "./client/components/LayoutContainer";

ReactDOM.render(
  <React.StrictMode>
    <LayoutContainer>
      <App />
    </LayoutContainer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
