// import { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [popularFilm, setPopularFilm] = useState([]);
//   const [movieData, setMovieData] = useState([]);

//   console.log(movieData);
//   const getFilmById = filmId => {
//     return popularFilm.find(film => film.id === filmId);
//   };

//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       url: `https://api.themoviedb.org/3/movie/${movieId} `,
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWRjNzIzMjY1YjdjMzZiOWJahNDE0N2E5NzQ4N2M4OCIsInN1YiI6IjY1MTE3ZDllMjZkYWMxMDBhYzA5OTE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aWkR21zshqWnzB_Rinad0qTA6B3gODh5i3MASIEagk4',
//       },
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         setMovieData(response.data);
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   }, [movieId]);
// const { id, title, poster_path, backdrop_path } = movieData; 
//   return (
//     <div>
//       <button>go to back</button>
//       <ul>
//         <li key={id}>
//           <img
//             src={`https://image.tmdb.org/t/p/w500${poster_path && backdrop_path}`}
//             width={120}
//             height={120}
//             alt={title}
//           />
//         </li>
//       </ul>
//       <div></div>
//       <NavLink to="cast">cast</NavLink>
//       <NavLink to="reviews">reviews</NavLink>
//       <Outlet />
//     </div>
//   );
// };

// export default MovieDetails;
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMovieData, getFilmById } from '../api/api';


const MovieDetails = () => {
  const { movieId } = useParams();
  const [popularFilm, setPopularFilm] = useState([]);
  const [movieData, setMovieData] = useState([]);

  console.log(movieData);
  // const getFilmById = filmId => {
  //   return popularFilm.find(film => film.id === filmId);
  // };

  useEffect(() => {
  fetchMovieData(movieId)
    .then(data => {
      setMovieData(data);
    })
    .catch(error => {
      console.error(error);
    });
  }, [movieId]);


  const { id, title, poster_path, backdrop_path } = movieData;

    const filmById = getFilmById(popularFilm, movieId);

  return (
    <div>
      <button>go to back</button>
      <ul>
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${
              poster_path && backdrop_path
            }`}
            width={120}
            height={120}
            alt={title}
          />
        </li>
      </ul>
      <div></div>
      <NavLink to="cast">cast</NavLink>
      <NavLink to="reviews">reviews</NavLink>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
