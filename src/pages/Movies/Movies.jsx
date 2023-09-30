import { useEffect, useState} from 'react';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from '../../api/api';
import {  SearchForm, Container, FilmLink } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [serchParams, setSearchParams] = useSearchParams();
  const moviesId = serchParams.get('moviesId');
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();

    searchTerm
      ? setSearchParams({ moviesId: searchTerm })
      : setSearchParams({});
    setSearchTerm('');
  };

  useEffect(() => {
    if (!moviesId) return;

    fetchSearchMovies(moviesId)
      .then(data => {
        setMovies(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [moviesId]);

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <div>
          <label></label>
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </SearchForm>
      {movies &&
        movies.map(movie => (
          <ul key={movie.id}>
            <FilmLink to={`/movies/${movie.id.toString()}`} state={location}>
              {movie.title}
            </FilmLink>
          </ul>
        ))}
      <Outlet />
    </Container>
  );
};
export default Movies;
