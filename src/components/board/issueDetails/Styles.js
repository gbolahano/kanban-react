import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "action"
    "content";
  font-size: 30px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 5px;
  `;

export const Action = styled.div`
  grid-area: action;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr minmax(min-content, 25vw);
  grid-gap: 30px;
`;


export const ActionRight = styled.div`

`;

export const Left = styled.div`
  display: grid;
  grid-gap: 20px;
  p {
    img {
      max-width: 100%;
    };
  }
`;

export const Right = styled.div`
  display: grid;
  grid-gap: 20px;
  align-content: start;
  font-size: 30px;
`;

