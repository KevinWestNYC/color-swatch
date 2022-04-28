import React from 'react'

export default function SideBar({ randomButtonClicked, setRandomButtonClicked, setPrimaryColor }) {


  return (
    <div className="sidebar">
        <button className="random-color-button" onClick={()=> setRandomButtonClicked(randomButtonClicked + 1)}>Random Color</button>
        <ul className="color-buttons-list">
            <li className="button-list-item" onClick={() => setPrimaryColor("#FF0000")}>Red</li>
            <li className="button-list-item" onClick={() => setPrimaryColor("#F86B26")}>Orange</li>
            <li className="button-list-item" onClick={() => setPrimaryColor("#FFFF00")}>Yellow</li>
            <li className="button-list-item" onClick={() => setPrimaryColor("#00FF00")}>Green</li>
            <li className="button-list-item" onClick={() => setPrimaryColor("#0000FF")}>Blue</li>
            <li className="button-list-item" onClick={() => setPrimaryColor("#6a0dad")}>Purple</li>
            <li className="button-list-item" onClick={() => setPrimaryColor("#964B00")}>Brown</li>
            <li className="button-list-item" onClick={() => setPrimaryColor("#808080")}>Grey</li>
        </ul>
    </div>
  )
}
