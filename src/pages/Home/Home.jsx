import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fetchPopularFilms } from '../../api/api';
import {FilmLink, Title, TrendingContainer} from './Home.styled'

const Home = () => {
  const [popularFilm, setPopularFilm] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchPopularFilms()
      .then(data => {
        setPopularFilm(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <TrendingContainer>
        <Title>Trending today</Title>
        <ul>
          {popularFilm &&
            popularFilm.map(film => (
              <div key={film.id}>
                <FilmLink to={`/movies/${film.id.toString()}`} state={location}>
                  {film.title || film.name}
                </FilmLink>
              </div>
            ))}
        </ul>
      </TrendingContainer>
      <Outlet />
    </div>
  );
};
export default Home;
