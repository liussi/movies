import { Outlet } from 'react-router-dom';
import { Container, List, ListItem, NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Container>
        <List>
          <ListItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="movies">Mevies</NavLinkStyled>
          </ListItem>
        </List>
      </Container>
      <Outlet />
    </div>
  );
};
