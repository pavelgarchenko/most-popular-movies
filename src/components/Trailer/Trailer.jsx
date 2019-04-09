import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Trailer.scss";


const Trailer =(props) => {
  return (
    <React.Fragment>
      <div className="trailer">
        <a href={"https://www.youtube.com/watch?v=" + props.video_key} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faPlay} className="playArrow" />
        </a>
        <span className="trailerTitle">{props.video_name}</span>
      </div>
      <hr />
    </React.Fragment>
  )  
}

export default Trailer;