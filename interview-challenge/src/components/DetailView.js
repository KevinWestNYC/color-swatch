import React, { useState } from "react";

export default function DetailView() {
  const [largeSwatchColor, setLargeSwatchColor] = useState("#CFFFF1");
  const [gradientDetailCards, setGradientDetailCards] = useState([
    "#CFFFF1",
    "#CFFFF1",
    "#CFFFF1",
    "#CFFFF1",
    "#CFFFF1",
  ]);

  return (
    <div className="detail-view-page">
      <div className="main-detail-card-container">
        <div className="main-detail-card">
          <div
            className="large-color-card-swatch"
            style={{ backgroundColor: largeSwatchColor }}
          ></div>
          <div className="large-color-card-title">
            <p>{largeSwatchColor}</p>
          </div>
        </div>
      </div>
      <div className="gradient-detail-card-container">
            { gradientDetailCards.map((gradientDetailCard) => (
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
      <button className="clear-button">Clear</button>
    </div>
  );
}
