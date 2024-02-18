
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../api/api';
import {ActorImage, Container, ActorContainer, List } from './Cast.styled'

function Cast  ()  {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const urlImg = 'https://image.tmdb.org/t/p/w500';
  
  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        setCast(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);
 

  return (
    <Container>
      <List>
        {cast.map((actor, index) => (
          <ActorContainer key={index}>
            <ActorImage
              src={`${urlImg}${actor.profile_path}`}
              alt=""
              width={120}
            />
            <li>{actor.name}</li>
            <p>Character : {actor.character}</p>
          </ActorContainer>
        ))}
      </List>
    </Container>
  );
};
export default Cast;
