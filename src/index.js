import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Background from "./img/dawn.jpg";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div
        className="Background"
        style={{
          backgroundImage: "url(" + Background + ")",
          backgroundSize: "cover",
        }}
      >
        <h1> React to any weather!</h1>
        <p>- coder's pun intended -</p>
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
