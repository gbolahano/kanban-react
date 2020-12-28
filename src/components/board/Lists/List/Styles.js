import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fafafa;
  flex: 1;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
  padding: 1rem;
  font-size: 1.2rem;
  color: #444;
`;

export const Issues = styled.div`
  padding: 8px;
  min-height: 1rem;
  flex: 1;
  // flex-grow: 1;
`;

