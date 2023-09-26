// import { useEffect, useState } from "react";
// import { Outlet,  Link } from 'react-router-dom';
// import axios from 'axios';


// const Home = () => {
//   const [popularFilm, setPopularFilm] = useState([]);



  
//   useEffect(() => {

//     const options = {
//       method: 'GET',
//       url: 'https://api.themoviedb.org/3/trending/all/day',
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWRjNzIzMjY1YjdjMzZiOWJhNDE0N2E5NzQ4N2M4OCIsInN1YiI6IjY1MTE3ZDllMjZkYWMxMDBhYzA5OTE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aWkR21zshqWnzB_Rinad0qTA6B3gODh5i3MASIEagk4',
//       },
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         // return response.data;
//         setPopularFilm(response.data.results);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
      
  
//   }, []);
//     // useEffect робить тут /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
//     // тут рендеряться тільки популярні колукції
//   return (
//     <div>
//       <h1>Список популярних фільмів</h1>
//       <ul>
//         {popularFilm &&
//           popularFilm.map(film => (
//             <div key={film.id}>
//               <Link to={`/movies/${film.id}`}>{film.title || film.name}</Link>
//             </div>
//           ))}
//       </ul>
//       )
      
//       <Outlet />
//     </div>
//   );
// }
// export default Home;

import { useEffect, useState } from "react";
import {  Outlet, Link } from 'react-router-dom';
import  {fetchPopularFilms} from '../api/api'

const Home = () => {
  const [popularFilm, setPopularFilm] = useState([]);

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
      <h1>Trending today</h1>
      <ul>
        {popularFilm &&
          popularFilm.map(film => (
            <div key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title || film.name}</Link>
            </div>
          ))}
      </ul>
      )
      <Outlet />
    </div>
  );
}
export default Home;