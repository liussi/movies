import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const TrendingContainer = styled.div`
  text-align: start;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const FilmLink = styled(Link)`
  display: block;
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export { FilmLink, Title, TrendingContainer };
