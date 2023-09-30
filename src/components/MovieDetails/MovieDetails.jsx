import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMovieData } from '../../api/api';
import { FaArrowLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  Image,
  InfoContainer,
  Container,
  LinkButton,
  Text,
  Span,
  Wrapper,
  LinkContainer,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
  const urlImg = 'https://image.tmdb.org/t/p/w500';
  const backLinckLocation = useRef(location.state);

  const getFilmById = filmId => {
    return movieData.find(film => film.id === filmId);
  };

  useEffect(() => {
    fetchMovieData(movieId)
      .then(data => {
        setMovieData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  const { title, poster_path, backdrop_path, popularity, overview } = movieData;

  return (
    <div>
      <LinkContainer>
        <IconContext.Provider value={{ size: '0.8em' }}>
          <LinkButton to={backLinckLocation.current}>
            <FaArrowLeft /> Go back
          </LinkButton>
        </IconContext.Provider>
      </LinkContainer>
      <Container key={getFilmById.id}>
        <Image
          src={`${urlImg}${poster_path || backdrop_path}`}
          width={120}
          height={120}
          alt={title}
        />
        <InfoContainer>
          <h2>{title}</h2>
          <Text>
            User Score: <Span>{Math.floor(popularity)}%</Span>
          </Text>
          <Text>Overview</Text>
          <Span>{overview}</Span>
          <Text>Genres </Text>
          {movieData.genres && movieData.genres.length > 0 && (
            <Span>{movieData.genres.map(genre => genre.name).join(', ')}</Span>
          )}
        </InfoContainer>
      </Container>
      <Wrapper>
        <h2>Additional information</h2>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </Wrapper>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
