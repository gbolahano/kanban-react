import styled from 'styled-components';
import { color } from '../../shared/constants/styles';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "action"
    "content";
  font-size: 30px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  margin-top: 5rem;
  margin-bottom: 5rem;
  border-radius: 5px;
  `;

export const Action = styled.div`
  grid-area: action;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr minmax(min-content, 25vw);
  grid-gap: 3rem;
`;

export const ActionRight = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 2rem;
    &:hover {
      background-color: ${color.backgroundLightest};
    }
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 8px;
    color: #000;
  }
`;

export const Left = styled.div`
  display: grid;
  grid-gap: 2rem;
  p {
    img {
      max-width: 100%;
    };
  }
`;

export const Right = styled.div`
  display: grid;
  grid-gap: 2rem;
  align-content: start;
  font-size: 30px;
`;

