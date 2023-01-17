const API = 'http://localhost:1963/api/shows'

export const getShows = async () => {
  try {
    const response = await fetch(API);
    const shows =  await response.json()
    return shows;
  } catch (error) {
    return 'Error in getShows function';
  }
}

//POST Add a show
//Private
export const addShow = async (formData) => {
  try {
   const response = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
   });
   return response.json()
  } catch (error) {
    console.log(error, 'post error')
  }
}