//will render all the show Cards
import React, {useState, useEffect} from "react";
import ShowCard from "./ShowCard";
import { useMedia } from "../context/ContextAPI";

function ShowContainer (){
  const { shows } = useMedia()

  return (
    <div>
    {shows.map((show) => {
      return (
        <ShowCard 
          key={show._id}
          title={show.title}
        />
      )
    })}
    </div>
  )
}

export default ShowContainer;