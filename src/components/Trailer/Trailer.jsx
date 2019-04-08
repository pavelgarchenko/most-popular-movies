import React from "react";
import { Link } from "react-router-dom"
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Trailer.scss";


const Trailer =(props) => {
  return (
    <React.Fragment>
      <div className="trailer">
        <Link to={"https://www.youtube.com/watch?v=" + props.video_key} 
          target="_blank" 
          rel="noopener norefferer"
        >
          <FontAwesomeIcon icon={faPlay} className="playArrow" />
        </Link>
        <span className="trailerTitle">{props.video_name}</span>
      </div>
      <hr />
    </React.Fragment>
  )  
}

export default Trailer;