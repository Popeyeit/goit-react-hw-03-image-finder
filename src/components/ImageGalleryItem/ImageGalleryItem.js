import React from 'react';
import './ImageGalleryItem.css'
const ImageGalleryItem = ({previewURL,largeImageURL,showModal}) => {
  
    return (
        <div onClick={()=>{
          showModal(largeImageURL)
        }}>
        <li className="ImageGalleryItem">
        <img src={previewURL} alt="" className="ImageGalleryItem-image" />
      </li>
        </div>
    );
};

export default ImageGalleryItem;