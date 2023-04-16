import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a5df1998c5a11e97d4f18de655b25c8d';

export const fetchMovies = async (category, searchQuery) => {
  const url = `${BASE_URL}${category}?api_key=${API_KEY}&query=${searchQuery}&language=en&page=1`;
  const response = await axios.get(url);
  return response.data;
};
