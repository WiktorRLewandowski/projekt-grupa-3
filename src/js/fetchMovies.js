import axios from 'axios';
// import { renderMovies } from './gallery';
import { renderMovies } from './renderMovies';

export const fetchMovies = async url => {
  try {
    const response = await axios.get(url);
    console.log(response);
    totalPages = response.data.total_pages;
    renderMovies(response.data.results);
  } catch (error) {
    console.log(error);
  }
};
