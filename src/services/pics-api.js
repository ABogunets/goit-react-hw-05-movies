import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a5df1998c5a11e97d4f18de655b25c8d';

// by trend https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// by search https://api.themoviedb.org/3/search/movie?api_key=a5df1998c5a11e97d4f18de655b25c8d&language=en-US&query=rain&page=1&include_adult=false
// by id https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export const fetchMovies = async (category, searchQuery) => {
  const url = `${BASE_URL}${category}?api_key=${API_KEY}&query=${searchQuery}&language=en&page=1`;
  const response = await axios.get(url);
  console.log('response', response);
  return response.data;
};
