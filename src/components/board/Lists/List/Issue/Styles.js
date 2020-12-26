import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  border: 1px solid lightgrey;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 0 4px rgba(#cccccc, .6);
  // cursor: pointer;

  &:hover {
    background-color: rgba(#cccccc, .1);
  }
  p {
    font-size: 1.3rem;
    line-height: 1.5;
  }
  div {
    box-sizing: border-box;
    padding-right: 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    // flex-wrap: nowrap;

    div {
      // flex: 1;
      figure {
        img {
          width: 30px;
          height: 30px;
          border-radius: 100%;
        }
      }
    }
    div {
      // flex: 2;
      display: flex;
      figure {
        img {
          width: 30px;
          height: 30px;
          border-radius: 100%;
          border: 2px solid #fff;
          margin-right: -10px;
        }
      }
    }
  }

`;


export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
`;