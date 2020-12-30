import styled from 'styled-components';
import { color } from '../../shared/constants/styles';

export const BreadCrumbs = styled.div`
  margin-top: 1rem;
  color: #444;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  h2{
    font-size: 2.5rem;
    color: #444;
  }
  a {
    &:link,
    &:visited{
      text-decoration: none;
    }
    outline: none;
    display: block;
    background-color: #fafafa;
    padding: 6px 15px;
    font-size: 1.8rem;
    border: 0px;
    cursor: pointer;
    border-radius: 5px;
    color: #000;
    &:hover {
      background-color: ${color.backgroundLightest};
    }
  }
`;