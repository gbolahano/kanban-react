import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: [navbar-start] 65px [navbar-end sidebar-start]  230px [sidebar-end board-start] 1fr [board-end];
  font-size: 3rem;
`;