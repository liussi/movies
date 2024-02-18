import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fetchPopularFilms } from '../../api/api';
import { FilmLink, Item, List, Title, TrendingContainer } from './Home.styled'

function Home ()  {
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
        <List>
          {popularFilm &&
            popularFilm.map(film => (
              <Item key={film.id}>
                <FilmLink to={`/movies/${film.id.toString()}`} state={location}>
                  {film.title || film.name}
                </FilmLink>
              </Item>
            ))}
        </List>
      </TrendingContainer>
      <Outlet />
    </div>
  );
};
export default Home;
