import React, { useEffect, useState } from "react";
import GalleryDisplay from "./GalleryDisplay";
import DetailView from "./DetailView";

export default function ContentArea() {
    const [mainColor, setMainColor] = useState("");

    useEffect(() => {
        console.log(mainColor)
    },[mainColor])

  return (
    <div className="content-area">
      <div className="content-pages">
{      mainColor ?    
        <DetailView mainColor={mainColor} onClear={() => setMainColor("")} />
        :
        <GalleryDisplay onColorChange={(color) => setMainColor(color)} />
}
      </div>
    </div>
  );
}