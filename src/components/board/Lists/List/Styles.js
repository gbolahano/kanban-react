import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fafafa;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
  padding: 10px;
  font-size: 1.2rem;
  color: #444;
`;

export const Issues = styled.div`
  padding: 8px;
  min-height: 100px;
  flex: 1;
  // flex-grow: 1;
`;