import styled from 'styled-components';
import { Link} from 'react-router-dom';

export const Navbar = styled.div`
  grid-column: navbar-start / navbar-end;
  background: #0146b3;
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
    padding-left: 10px;
    margin-top: 15px;
    margin-bottom: 30px;
    img {
      object-fit: cover;
      width: 45px;
      height: 45px;
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
    background-color: #ccc;
  }
  color: #fff;
  display: flex;
  align-items: center;
  padding: 5px 5px;
  span {
    display: block;
    margin-left: 10px ;
    font-size: 30px;
  }
  p {
    margin-left: 25px;
    font-size: 12px;
  }
`;