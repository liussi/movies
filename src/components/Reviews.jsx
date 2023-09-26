// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import {  useParams } from 'react-router-dom';

// const Reviews = () => {


//     const [rewiews, setRewiews] = useState([]);
// const { movieId } = useParams();
//     useEffect(() => {
//         const options = {
//           method: 'GET',
//           url: `https://api.themoviedb.org/3/movie/${movieId}/reviews `,
//           headers: {
//             accept: 'application/json',
//             Authorization:
//               'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWRjNzIzMjY1YjdjMzZiOWJhNDE0N2E5NzQ4N2M4OCIsInN1YiI6IjY1MTE3ZDllMjZkYWMxMDBhYzA5OTE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aWkR21zshqWnzB_Rinad0qTA6B3gODh5i3MASIEagk4',
//           },
//         };

//         axios
//             .request(options)
//             .then(function (response) {
//                 // return response.data;
//                 setRewiews(response.data.results);
//                 console.log(response.data.results);
//             })
//             .catch(function (error) {
//                 console.error(error);
//             });
//         }, [movieId]);
//     return (
//       <div>
//         <h2>Актори та їхні ролі:</h2>
//         <ul>
//           {rewiews.map((author, index) => (
//             <li key={index}>
//               <strong>Актор:</strong>{' '}
//               {author.author.length > 0 ? author.author : <p>not found</p>},{' '}
//               <strong>Роль:</strong> {author.content}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
    
// };
// export default Reviews;


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../api/api';

const Reviews = () => {
  const [rewiews, setRewiews] = useState([]);
  const { movieId } = useParams();
  
  useEffect(() => {
    fetchReviews(movieId)
      .then(data => {
        setRewiews(data);
      })
      .catch(error => {
        console.error(error);
      });
    
  }, [movieId]);
  return (
    <div>
      <h2>Актори та їхні ролі:</h2>
      <ul>
        {rewiews.map((author, index) => (
          <li key={index}>
            <strong>Актор:</strong>{' '}
            {author.author.length > 0 ? author.author : <p>not found</p>},{' '}
            <strong>Роль:</strong> {author.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
