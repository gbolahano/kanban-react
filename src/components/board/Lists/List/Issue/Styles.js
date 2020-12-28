import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {color} from '../../../../shared/constants/styles';

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .2);
  // cursor: pointer;

  &:hover {
    background-color: ${color.backgroundLightest};
  }
  p {
    font-size: 1.3rem;
    line-height: 1.5;
  }
  div {
    box-sizing: border-box;
    padding-right: 1rem;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    // flex-wrap: nowrap;

    div {
      // flex: 1;
      figure {
        img {
          width: 3rem;
          height: 3rem;
          border-radius: 100%;
        }
      }
    }
    div {
      // flex: 2;
      display: flex;
      figure {
        img {
          width: 3rem;
          height: 3rem;
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
`;

export const StyledIcon = styled.span`
  font-size: 1.3rem;
`;