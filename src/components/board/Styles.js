import styled  from 'styled-components';

export const Container = styled.div`
  grid-template-columns: board-start / board-end;
  width: 1fr;
  @media screen and (max-width: 900px) {
    width: 100vw;
  }
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 20px;
  display: grid;
  grid-gap: 15px;
  grid-template-rows: repeat(3, min-content) minmax(max-content, 1fr);
  grid-template-columns: 1fr;


  .issues {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    div {
      background-color: #fafafa;
      display: flex;
      flex-direction: column;
      padding: 0 5px;

      h3 {
        text-transform: uppercase;
        padding: 10px;
        font-size: 1.2rem;
        color: #444;
      }
    }
  }
`;