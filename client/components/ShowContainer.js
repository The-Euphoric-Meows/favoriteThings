//will render all the show Cards
import React, {useState, useEffect} from "react";
// import { getShows } from "../service/getShows";
import ShowCard from "./showCard";

function ShowContainer (){
  const [ shows, setShows ] = useState([])

  const API = 'http://localhost:1963/api/shows'

  const getShows = () => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
       setShows(data)
       console.log('getshows', shows)
    })
  }

  useEffect(() => {
    getShows();
    // setShows(data);
    console.log('data')
  }, []);
  
  console.log('shows', shows)
  return (
    <div>
      <ShowCard 
        />
    </div>
  )
}

export default ShowContainer;