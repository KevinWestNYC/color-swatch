import React, { useState } from "react";

export default function DetailView({ onClear, mainColor }) {
//   const [largeSwatchColor, setLargeSwatchColor] = useState("");
  const [gradientDetailCards, setGradientDetailCards] = useState([
    "#CFFFF1",
    "#CFFFF1",
    mainColor,
    "#CFFFF1",
    "#CFFFF1",
  ]);

  return (
    <div className="detail-view-page">
      <div className="main-detail-card-container">
        <div className="main-detail-card">
          <div
            className="large-color-card-swatch"
            style={{ backgroundColor: mainColor }}
          ></div>
          <div className="large-color-card-title">
            <p>{mainColor}</p>
          </div>
        </div>
      </div>
      <div className="gradient-detail-card-container">
        {gradientDetailCards.map((gradientDetailCard) => (
          <div className="gradient-detail-card">
            <div
              className="gradient-color-card-swatch"
              style={{ backgroundColor: gradientDetailCard }}
            ></div>
            <div className="gradient-color-card-title">
              <p>{gradientDetailCard}</p>
            </div>
          </div>
        ))}
      </div>
      <button 
      className="clear-button" 
    //   onClick={() => setMainColor("")}
      onClick={onClear}

      >
        Clear
      </button>
    </div>
  );
}
