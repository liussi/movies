import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LinkContainer = styled.div`
margin-top: 20px;

`;

const Container = styled.div`
  display: flex;
  align-items: center;
 
  color: #000000;
  box-shadow: 0 4px 10px rgba(236, 117, 6, 0.505);
  padding: 20px;
`;


const Wrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
  box-shadow: 0 4px 5px rgba(236, 117, 6, 0.505);
`;

const LinkButton = styled(Link)`
margin-top: 20px;
  color: #0a0e11; 
  text-decoration: none; 
  text-align: center;
  cursor: pointer; 
  &:hover {
    color: #0056b3; 
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

const Image = styled.img`
margin-right: 20px;
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Text = styled.p`
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 20px;
  background: linear-gradient(to right, black, #dd7709);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
  font-weight: bold; 
  text-align: center;
`;

const Span = styled.span`
  font-weight: normal;
`;

const WrapInfo= styled.div`
      display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
      /* transition: box-shadow 0.3s;
   &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  } */

`
const FilmLink = styled(Link)`
  display: block;
  font-size: 20px;
 
  color: #000000;
  text-decoration: none;
  margin: 10px 0;
font-weight: bold; 
border-radius: 25%;
padding: 10px;
    transition: box-shadow 0.3s;
   &:hover {
    box-shadow: 0 0 10px rgba(207, 103, 12, 0.5); 
  }
`;

export {
  Wrapper,
  Span,
  Text,
  Image,
  InfoContainer,
  Container,
  LinkButton,
  LinkContainer,
  Title,
  WrapInfo,
  FilmLink
};