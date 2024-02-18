import { useEffect, useState} from 'react';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from '../../api/api';
import { SearchForm, Container, FilmLink, Wrapper, Item, List } from './Movies.styled';

function Movies ()  {
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
        <Wrapper>
      <SearchForm onSubmit={handleSubmit}>

          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        <button type="submit">Search</button>
      </SearchForm>
         <Outlet />
      </Wrapper>
      <List>
        {movies &&
        movies.map(movie => (
          <Item key={movie.id}>
            
              <FilmLink to={`/movies/${movie.id.toString()}`} state={location}>
              {movie.title}
            </FilmLink>
           
          </Item>
        ))}
         </List>
      
    </Container>
  );
};
export default Movies;
