import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  background: #fff;
  color: #333;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;


const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  margin: 0 10px;
`;

const NavLinkStyled = styled(NavLink)`
  color: #333; 
  text-decoration: none;
  font-size: 18px; 

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`;
export { NavLinkStyled, ListItem, List, Container };