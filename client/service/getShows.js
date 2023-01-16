const API = 'http://localhost:1963/api/shows'

export const getShows = () => {
  
  fetch(API)
  .then(response => response.json())
  .then(data => {
     return data;
    
  })
}