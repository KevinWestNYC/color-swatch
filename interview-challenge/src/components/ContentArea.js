import React, { useEffect, useState } from "react";
import GalleryDisplay from "./GalleryDisplay";
import DetailView from "./DetailView";

export default function ContentArea({ primaryColor, randomButtonClicked }) {
  const [mainColor, setMainColor] = useState("");

  const getRandomColor = () => {
    const randomColor =
      "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
    setMainColor(randomColor);
  };

  useEffect(() => {
      setMainColor(primaryColor);
  },[primaryColor])

  useEffect(() => {
      randomButtonClicked > 0 &&
    getRandomColor();
  }, [randomButtonClicked]);

  return (
    <div className="content-area">
      <div className="content-pages">
        {mainColor ? (
          <DetailView mainColor={mainColor} onClear={() => setMainColor("")} onColorChange={(color) => setMainColor(color)}/>
        ) : (
          <GalleryDisplay onColorChange={(color) => setMainColor(color)} />
        )}
      </div>
    </div>
  );
}
