import React from "react";

import "./CurrentDate.css";

export default function CurrentDate() {
  let weatherData = {
    date: "25 December 2021",
    update: "02:58",
  };
  return (
    <div className="Date">
      last updated on {weatherData.date}, {weatherData.update} hrs
    </div>
  );
}
