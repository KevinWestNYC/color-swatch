import React, {useState} from 'react'

export default function ColorCard({color}) {

    return (
    <div className="color-card">
        <div className="color-card-swatch" style={{backgroundColor:color}}></div>
        <div className="color-card-title">
            <p>{color}</p>
        </div>
    </div>
  )
}
