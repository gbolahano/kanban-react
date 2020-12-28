import styled from 'styled-components';
import { Link} from 'react-router-dom';
import { color } from '../shared/constants/styles';

export const Navbar = styled.div`
  grid-column: navbar-start / navbar-end;
  background: ${color.primary};
  color: #fff;
  height: 100vh;
  transition: all .3s;
  display: flex;
  flex-direction: column;

  &:hover {
    width: 180px;
    z-index: 100000;
    box-shadow: 20px 20px 40px rgba(#777777, .4);
  }

  figure {
    width: 100%;
    padding-left: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    img {
      object-fit: cover;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 5px;
    }
  }
}


`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited,
  &:link {
    text-decoration: none;
  }
  &:hover {
    background-color: #0f52ba;
  }
  color: #fff;
  display: flex;
  align-items: center;
  padding: 5px 5px;
  span {
    display: block;
    margin-left: 1rem ;
    font-size: 30px;
  }
  p {
    margin-left: 2.5rem;
    font-size: 12px;
  }
`;