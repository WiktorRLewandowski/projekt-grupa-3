import axios from 'axios';
// import { renderMovies } from './gallery';
import { renderMovies } from './renderMovies';
import { imageButtonClick } from './modal';

export let fetchSearchFlag = false;
const URL = 'https://api.themoviedb.org/3/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const KEY = '79ea8908d5d0aaabd49d601dd35d503a';
const LANG = 'en-US';
const SEARCH_URL = 'search/movie';
export let totalPages = 0;

export const fetchMovies = async url => {
  try {
    const response = await axios.get(url);
    totalPages = response.data.total_pages;
    // console.log(totalPages);
    // console.log(response.data);
    renderMovies(response.data.results);
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearch = async (query, page) => {
  fetchSearchFlag = true;
  const response = await axios.get(`${URL}${SEARCH_URL}`, {
    params: {
      query: query,
      api_key: KEY,
      language: LANG,
      include_adult: false,
      page: page,
    },
  });
  totalPages = response.data.total_pages;
  // console.log(totalPages);
  return response.data;
};


//do wyszukania pełnego info o filmie wystarczy samo ID np. fetchID(603692) i dalej obsługa promise'a (.then().catch()) 
//-- wyszuka info o John Wick4
//do wyszukania video drugi argument jest boolowski np. fetchID(603692, true) -"- 
//-- wyszuka wszystkie zwiastuny John Wick4
export const fetchID = async (id, video) => { 
  !video ? video = "" : video = '/videos';
  const response = await axios.get(`${URL}movie/${id}${video}`,{
    params: {
      api_key: KEY,
      language: LANG,
      include_adult: false,
    }
  });
  const data = await response.data;
  // console.log(data);
  // console.log(video)
  return data;

};

// export const fetchVideo = async id => {
//   const response = await axios.get(`${URL}movie/${id}/videos`,{
//     params: {
//       api_key: KEY,
//       language: LANG,
//       include_adult: false,
//     }
//   });
//   const data = await response.data;
//   console.log(data)
//   return data;
// }

export const fetchTrending = async () => {
  const response = await axios.get(`${URL}trending/movie/week`, {
    params: {
      api_key: KEY,
      language: LANG,
      include_adult: false,
    }
  })
  const data = await response.data;
  renderMovies(data.results)
} // tak było mi szybciej załadować endingtr na nieudanym wyszukiwaniu

// fetchID(603692, true).then(data => console.log(data)).catch(error=>console.log(error))

