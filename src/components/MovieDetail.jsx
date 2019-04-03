import React from "react";

const MovieDetail = ({ match }) => {
  return <div className="MovieDetail" data-test="MovieDetail">Movie Detail {match.params.id}</div>
}

export default MovieDetail;