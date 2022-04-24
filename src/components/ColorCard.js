import React, {useState} from 'react'

export default function ColorCard({color, onClick}) {

    return (
    <div className="color-card" onClick={onClick}>
        <div className="color-card-swatch" style={{backgroundColor:color}}></div>
        <div className="color-card-title">
            <p>{color}</p>
        </div>
    </div>
  )
}
