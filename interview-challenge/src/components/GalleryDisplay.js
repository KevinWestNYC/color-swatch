import React, { useEffect, useState } from "react";
import ColorCard from "./ColorCard";
import colors from "../data/colors.json"


export default function GalleryDisplay({ mainColor, setMainColor, onColorChange }) {
  const [page, setPage] = useState(1)
  const [allColors, setAllColors] = useState(colors);
  const [currentColors, setCurrentColors] = useState([]);
  const cardsPerPage = 12;
  let totalPagesArray = Array.from({length: (Math.floor(allColors.length / cardsPerPage))}, (_, i) => i + 1)
  
  const displayCurrentPage = (page) => {
    page == 1 ? setCurrentColors(allColors.slice(0,12)) :
    setCurrentColors(allColors.slice(0,12))
    let start = cardsPerPage * (page - 1) + (page-1);
    let end = cardsPerPage * page + (page-1);
    setCurrentColors(allColors.slice(start,end))
  }

  useEffect(() =>{
    displayCurrentPage(page)
  }, [page])

  return (
    <div className="gallery-page">
      <div className="color-gallery">
        {currentColors &&
          currentColors.map((color) => (
            <ColorCard
              key={color.name}
              color={color.hex}                
              onClick={() => onColorChange(color.hex)}
            />
          ))}
      </div>
      <div className="pagination-button-container">
            {totalPagesArray.map((p) => (
              <p key={p} className="pagination-button" onClick={()=> setPage(p)}>{p}</p>
              ))}
              </div>
    </div>
  );
}
