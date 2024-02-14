import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 40px;
`;

const Wrapper = styled.div`
   display: flex;
    justify-content: center;
`
const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 30px;

  label {
    font-size: 1.2rem;
    margin-right: 10px;
  }

  input {
    flex: 1;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #67727e;
    color: #fff;
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
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
 

`;
export { FilmLink, SearchForm, Container,Wrapper ,List,Item};