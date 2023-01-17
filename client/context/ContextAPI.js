import React , { createContext, useState, useEffect, useContext } from 'react';

const ContextAPI = createContext();

const useMedia = () => useContext(ContextAPI)

function ContextAPIProvider(props){
  //state goes here
  const [ shows, setShows ] = useState([])

  useEffect(() => {
    fetch('http://localhost:1963/api/shows')
      .then(response => response.json())
      .then(data => setShows(data))
    }, [shows])

  const state = {
    shows,
    setShows
  }

  return(
    <ContextAPI.Provider value={ state }> 
      {props.children}
    </ContextAPI.Provider> 
  )
}

export { ContextAPI, useMedia }
export default ContextAPIProvider;