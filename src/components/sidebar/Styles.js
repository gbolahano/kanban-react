import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {color} from '.././shared/constants/styles';

export const Container = styled.div`
  grid-template-columns: sidebar-start / sidebar-end;
  background-color: #fafafa;
  height: 100vh;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, min-content);
  grid-gap: 20px;
  align-items: start;


  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 5px;
  }
  div {
    margin-left: 1rem;
    line-height: 1.8;
    h3 {
      font-size: 12px;
    }
    span {
      font-size: 10px;
    }
  }
`;

export const SidebarNav = styled.div`

  ul {
    display: block;
    list-style: none;

    li {

    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:active,
  &:visited {
    text-decoration: none;
  }
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${props => props.active ? '#0146b3' : '#000'};
  background-color: ${props => props.active ? color.backgroundLightest : '#fafafa'};
  padding: 10px 10px;
  span {
    margin-right: 1rem;
    font-size: 15px;
  }
  &:hover {
    color: #0146b3 !important;
    background-color: ${color.backgroundLightest};
  }
`;