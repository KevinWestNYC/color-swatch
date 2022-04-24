import React, { useEffect, useState } from "react";
import { tint, shade } from "tint-shade-color";

export default function DetailView({ onClear, mainColor }) {
  const [gradientDetailCards, setGradientDetailCards] = useState([]);

  const createColorArray = () => {
    let gradientCardArray = [
      shade(mainColor, 0.45),
      shade(mainColor, 0.2),
      mainColor,
      tint(mainColor, 0.4),
      tint(mainColor, 0.65),
    ];
      setGradientDetailCards(gradientCardArray);
  };

  useEffect(() => {
    createColorArray();
  }, [mainColor]);

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
        {gradientDetailCards &&
          gradientDetailCards.map((gradientDetailCard) => (
            <div key={gradientDetailCard}className="gradient-detail-card">
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
      <button className="clear-button" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}
