import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const TrendingContainer = styled.div`
  text-align: start;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  background: linear-gradient(to right, black, #dd7709);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
  font-weight: bold; 
  text-align: center;
`;

const FilmLink = styled(Link)`
  display: block;
  font-size: 20px;
 
  color: #c66c06;
  text-decoration: none;
  margin: 10px 0;
font-weight: bold; 
border-radius: 25%;
padding: 10px;
    transition: box-shadow 0.3s;
   &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  }
`;


const List = styled.ul`
  display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
`

const Item = styled.li`
   width: calc(33.33% - 10px); 
 
`

export { FilmLink, Title, TrendingContainer ,List,Item};
