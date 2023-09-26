
import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWRjNzIzMjY1YjdjMzZiOWJhNDE0N2E5NzQ4N2M4OCIsInN1YiI6IjY1MTE3ZDllMjZkYWMxMDBhYzA5OTE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aWkR21zshqWnzB_Rinad0qTA6B3gODh5i3MASIEagk4';

const apiOptions = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
};

export  async function fetchPopularFilms() {
  try {
    const response = await axios.get(`${baseUrl}/trending/all/day`, apiOptions);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export  async function fetchCast(movieId) {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/${movieId}/credits`,
      apiOptions
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchReviews(movieId) {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/${movieId}/reviews`,
      apiOptions
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchMovieData(movieId) {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/${movieId}`,
      apiOptions
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


export function getFilmById(films, filmId) {
  return films.find(film => film.id === filmId);
}