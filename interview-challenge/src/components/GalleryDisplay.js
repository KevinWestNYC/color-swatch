import React, { useEffect, useState } from "react";
import ColorCard from "./ColorCard";
import colors from "../data/colors.json"


export default function GalleryDisplay({ mainColor, setMainColor, onColorChange }) {
  const [currentColors, setCurrentColors] = useState(colors);

  const createAndToggleDetail = (color) => {
    setMainColor(color)
    console.log("toggled")
  };

  useEffect(() => {
    
    console.log(currentColors);
  }, [setMainColor]);

  return (
    <div className="gallery-page">
      <div className="color-gallery">
        {currentColors &&
          currentColors.map((color) => (
            <ColorCard
              key={color.name}
              color={color.hex}                
              // onClick={() => createAndToggleDetail(color.hex)}
              onClick={() => onColorChange(color.hex)}
            />
          ))}
      </div>
      <div className="pagination-buttons">1 2 3 4 5 6 7 8 9 10</div>
    </div>
  );
}
