import React, { useState } from "react";

export default function ColorCard({ color, name, onClick }) {
  const [nameVisibility, setNameVisibility] = useState("hidden");
  const [hexVisibility, setHexVisibility] = useState("visible");
  const showName = (e) => {
    e.preventDefault();
    setHexVisibility("hidden");
    setNameVisibility("visible");
  };

  const showHex = (e) => {
    e.preventDefault();
    setHexVisibility("visible");
    setNameVisibility("hidden");
  };
  return (
    <div className="color-card" onClick={onClick}>
      <div
        className="color-card-swatch"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="color-card-title"
        onMouseEnter={(e) => showName(e)}
        onMouseLeave={(e) => showHex(e)}
      >
      { hexVisibility === "visible" ?    
        <p style={{visibility:hexVisibility}}>{color}</p> :
        <p className="color-card-name" style={{visibility:nameVisibility}}>{name}</p>
      }
      </div>
    </div>
  );
}
