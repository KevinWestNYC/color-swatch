import React from 'react'

export default function SideBar() {
  return (
    <div className="sidebar">
        <button className="random-color-button">Random Color</button>
        <ul className="color-buttons-list">
            <li className="button-list-item">Red</li>
            <li className="button-list-item">Orange</li>
            <li className="button-list-item">Yellow</li>
            <li className="button-list-item">Green</li>
            <li className="button-list-item">Blue</li>
            <li className="button-list-item">Purple</li>
            <li className="button-list-item">Brown</li>
            <li className="button-list-item">Grey</li>
        </ul>
    </div>
  )
}
