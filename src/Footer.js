import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/Nina241o/a-react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-Source code on Github
      </a>{" "}
      by Florina Seipp, hosted on{" "}
      <a
        href="https://thirsty-hodgkin-5fcfe2.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
