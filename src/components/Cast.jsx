// import { useEffect, useState } from "react";
// import {  useParams } from 'react-router-dom';
// import axios from 'axios';

// const Cast = () => {

//     const [cast, setCast] = useState([])
// const { movieId } = useParams();
//     useEffect(() => {
//         const options = {
//             method: 'GET',
//             url: `https://api.themoviedb.org/3/movie/${movieId}/credits `,
//             headers: {
//                 accept: 'application/json',
//                 Authorization:
//                     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWRjNzIzMjY1YjdjMzZiOWJhNDE0N2E5NzQ4N2M4OCIsInN1YiI6IjY1MTE3ZDllMjZkYWMxMDBhYzA5OTE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aWkR21zshqWnzB_Rinad0qTA6B3gODh5i3MASIEagk4',
//             },
//         };

//         axios
//             .request(options)
//             .then(function (response) {
//                 // return response.data;
//                 setCast(response.data.cast);
//                 console.log(response.data);
//             })
//             .catch(function (error) {
//                 console.error(error);
//             });
//     }, [movieId]);

//     return (
//       <div>
//         <h2>Актори та їхні ролі:</h2>
//         <ul>
//           {cast.map((actor, index) => (
//             <li key={index}>
//               <strong>Актор:</strong> {actor.name}, <strong>Роль:</strong>{' '}
//               {actor.character}
//               Foto:
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
//                 alt=""
//               width={120} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
// };
// export default Cast;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchCast} from '../api/api'

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  
  
  useEffect(() => {
    fetchCast(movieId)
    .then(data => {
      setCast(data);
      console.log(data);
      // if (cast.length === 0) {
      //   return;
      // }
    })
    .catch(error => {
      console.error(error);
    });
  }, [ movieId]);
  
  console.log(cast);
  return (
    <div>
      <h2>Актори та їхні ролі:</h2>
      <ul>
        {cast.map((actor, index) => (
          <li key={index}>
            <strong>Актор:</strong> {actor.name}, <strong>Роль:</strong>{' '}
            {actor.character}
            Foto:
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt=""
              width={120}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;