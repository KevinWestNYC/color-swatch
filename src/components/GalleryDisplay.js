import React, { useEffect, useState } from "react";
import ColorCard from "./ColorCard";
import colors from "../data/colors.json"


export default function GalleryDisplay({ onColorChange }) {
  const [page, setPage] = useState(1)
  const [allColors, setAllColors] = useState(colors);
  const [currentColors, setCurrentColors] = useState([]);
  const cardsPerPage = 12;
  let totalPagesArray = Array.from({length: (Math.floor(allColors.length / cardsPerPage))}, (_, i) => i + 1)
  
  const displayCurrentPage = (page) => {
    let start = cardsPerPage * (page - 1) + (page-1);
    let end = cardsPerPage * page + (page-1);
    page == 1 ? setCurrentColors(allColors.slice(0,cardsPerPage)) :
    setCurrentColors(allColors.slice(start,end))
  }

  // const filterSearchedColor = (word) => {
  //   word.charAt(0) === "#" ?
  //   setAllColors(allColors.filter((color) => color.hex === word)) :
  //   setAllColors(allColors.filter((color) => (color.name).toLowerCase().includes(word.toLowerCase())))
  //   console.log(`Searching ${word} CONTENT`)
  // }

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
              name={color.name}
              onClick={() => {
                onColorChange(color.hex, color.name)
              
              }}
            />
          ))}
      </div>
      <div className="pagination-button-container">
            {totalPagesArray.map((p) => (
              <p key={p} className="pagination-button" style={page == p ? {textDecoration:"underline"} : {}} onClick={()=> setPage(p)}>{p}</p>
              ))}
              </div>
    </div>
  );
}
