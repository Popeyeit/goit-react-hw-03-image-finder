import React from 'react';
import './ImageGallery.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
const ImageGallery = ({gallery=[],showModal}) => {
    return (
        <div>
        <ul className="ImageGallery">
        {
          gallery.map(item=><ImageGalleryItem {...item} showModal={showModal} key={item.id}/>)
        }
        
      </ul>
        </div>
    );
};

export default ImageGallery;