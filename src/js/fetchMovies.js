import axios from 'axios';
// import { renderMovies } from './gallery';
import { renderMovies } from './renderMovies';

const URL = 'https://api.themoviedb.org/3/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const KEY = '79ea8908d5d0aaabd49d601dd35d503a';
const LANG = 'en-US';
const SEARCH_URL = 'search/movie'

export const fetchMovies = async url => {
  try {
    const response = await axios.get(url);
    console.log(response);
    // totalPages = response.data.total_pages;
    renderMovies(response.data.results);
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearch = async (query, page) => {
  const response = await axios.get(`${URL}${SEARCH_URL}`, {
    params: {
    query: query,
    api_key: KEY,
    language: LANG,
    include_adult: false,
    page: page,
    }
  })
  return response.data
}

export const fetchID = async (id) => {
  const response = await axios.get(`movie/${id}`);
  const data = await response.data;
  return data
}
