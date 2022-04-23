import React, {useState} from 'react'
import GalleryDisplay from './GalleryDisplay'
import DetailView from './DetailView'

export default function ContentArea() {
  return (
    <div className="content-area">
        {/* <GalleryDisplay/> */}
        <DetailView />
    </div>
  )
}
