import React, { useState } from "react";

import Background1 from "./img/night.jpg";
import Background2 from "./img/dawn.jpg";
import Background3 from "./img/noon.jpg";
import Background4 from "./img/dusk.jpg";

export default function ChangeBackground() {
  const [hours, setHours] = useState("");

  setHours({
    night: 0 < 6,
    dawn:  6 < 12 ,
    noon:  12 < 18,
    dusk: 18 < 24,
  });
  
  if (hours === (0 < 6)) {
    return (
      {Background1}
    );
  } else if (hours === (6 < 12)) {
    return (
      {Background2}
    );
  }
    else if  (hours === (12 < 18)) {
    return (
      {Background3}
    );
  } else if (hours === (18 < 24)) {
    return (
      {Background4}
    );
  }
}
