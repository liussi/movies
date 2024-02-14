import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  background: #0d0c0c;
  padding: 20px;
   box-shadow: 0 4px 10px rgba(236, 117, 6, 0.605);
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
  color: #f0a952; 
  text-decoration: none;
  padding: 15px 20px;
  font-size: 18px; 
  border-radius: 25%;

   transition: box-shadow 0.3s;
   
   &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); 
  }

  &.active {
    font-weight: bold;
  }
`;
export { NavLinkStyled, ListItem, List, Container };