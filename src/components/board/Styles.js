import styled  from 'styled-components';

export const Container = styled.div`
  grid-template-columns: board-start / board-end;
  width: 1fr;
  @media screen and (max-width: 900px) {
    width: 100vw;
  }
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  padding-top: 2rem;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-rows: repeat(3, min-content) minmax(max-content, 1fr);
  grid-template-columns: 1fr;


  .issues {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    div {
      background-color: #fafafa;
      display: flex;
      flex-direction: column;
      padding: 0 5px;

      h3 {
        text-transform: uppercase;
        padding: 1rem;
        font-size: 1.2rem;
        color: #444;
      }
    }
  }
`;