import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  padding: 20px;
`;

const SearchForm = styled.form`
  display: flex;
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
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;
export { FilmLink, SearchForm, Container };