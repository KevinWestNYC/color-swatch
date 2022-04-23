import React, { useState } from "react";
import ColorCard from "./ColorCard";

export default function GalleryDisplay() {
  const [currentColors, setCurrentColors] = useState([
    "#CFFFF1",
    "#FEFEFE",
    "#417505",
    "#CFFFF1",
    "#FEFEFE",
    "#417505",
    "#CFFFF1",
    "#FEFEFE",
    "#417505",
    "#CFFFF1",
    "#FEFEFE",
    "#417505",
  ]);

  return (
    <div className="gallery-page">
      <div className="color-gallery">
        {currentColors.map((color) => (
          <ColorCard color={color} />
        ))}
      </div>
      <div className="pagination-buttons">1 2 3 4 5 6 7 8 9 10</div>
    </div>
  );
}
