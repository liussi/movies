import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../api/api';
import {ContentParagraph,AuthorHeading} from './Revievs.styled'

function Reviews () {
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
      <ul>
        {rewiews.length > 0 ? (
          rewiews.map((author, index) => (
            <li key={index}>
              <AuthorHeading>Author : {author.author}</AuthorHeading>
              <ContentParagraph>{author.content}</ContentParagraph>
            </li>
          ))
        ) : (
          <p>We dont have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
