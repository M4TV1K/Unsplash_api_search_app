import './css/ImageList.css';
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}/>
  })
  // OR
  /*const images = props.images.map(({id, urls, description}) => {
    return <img key={id} src={urls.regular} alt={description}/>
  });*/

  return (
      <div className="image-list">{images}</div>
  )
}

export default ImageList;