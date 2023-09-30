import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;

const ActorContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 20px; 
  text-align: center;
`;

const ActorImage = styled.img`
  width: 120px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export { ActorImage, Container, ActorContainer };