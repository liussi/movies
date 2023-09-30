import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LinkContainer = styled.div`
margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  color: #333;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


const Wrapper = styled.div`
  margin-top: 20px;
  background: #ffffff;
  color: #333;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const Span = styled.span`
  font-weight: normal;
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
};