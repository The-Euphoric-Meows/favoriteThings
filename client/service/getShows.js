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