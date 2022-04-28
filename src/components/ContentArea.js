import React, { useEffect, useState } from "react";
import GalleryDisplay from "./GalleryDisplay";
import DetailView from "./DetailView";

export default function ContentArea({ primaryColor, randomButtonClicked }) {
  const [mainColor, setMainColor] = useState("");
  const [mainColorName, setMainColorName] = useState("No Name");

  const getRandomColor = () => {
    const randomColor =
      "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
    setMainColor(randomColor);
    getColorName(randomColor);
  };

  const getColorName = async (name) => {
    
    let response = await fetch(
      `https://www.thecolorapi.com/id?hex=${name.replace("#", "")}`
      );
      let jsonData = await response.json();
      name &&
    setMainColorName(jsonData.name.value);
  };

  useEffect(() => {
    setMainColor(primaryColor);
    getColorName(primaryColor)
  }, [primaryColor]);

  useEffect(() => {
    randomButtonClicked > 0 && getRandomColor();
  }, [randomButtonClicked]);

  return (
    <div className="content-area">
      <div className="content-pages">
        {mainColor ? (
          <DetailView
            mainColor={mainColor}
            mainColorName={mainColorName}
            onClear={() => setMainColor("")}
          />
        ) : (
          <GalleryDisplay
            onColorChange={(color, name) => {
              setMainColor(color);
              setMainColorName(name);
            }}
          />
        )}
      </div>
    </div>
  );
}
