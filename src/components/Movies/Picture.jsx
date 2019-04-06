import React from "react";
import { IMG_SIZES, POSTER_URI_BASE } from "../../constants/constants";


const Picture = (props) => {
  const srcSets = [],
        mediaSets = []
  for(let i = 0; i < IMG_SIZES.length - 1; i++) {
    const src_1x = POSTER_URI_BASE + IMG_SIZES[i] + props.poster_path,
          src_2x = POSTER_URI_BASE + IMG_SIZES[i + 1] + props.poster_path + ' 2x';
    const media = IMG_SIZES[i + 1] === IMG_SIZES[IMG_SIZES.length - 1] 
      ? `(min-width: ${IMG_SIZES[i]}px)` 
      : `(max-width: ${IMG_SIZES[i + 1]}px)`
    
    srcSets.push(src_1x + ', ' + src_2x);
    mediaSets.push(media);
  }
  
  const sources = srcSets.map((srcSet, i) => {
    return <source key={i} srcSet={srcSet} media={mediaSets[i]}/>
  });

  return (
    <picture>
      {sources}
      <img srcSet={srcSets[1]} alt=""/>
    </picture>
  )
}

export default Picture;