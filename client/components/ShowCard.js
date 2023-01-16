//building out an individual show
import React from "react";

function ShowCard (props){
  const { title, genre, keywords } = props

  return (
    <div className="showCard">
      <h2>{title}</h2>
      <p>{genre}</p>
      <p>{keywords}</p>
    </div>
  )
}

export default ShowCard;