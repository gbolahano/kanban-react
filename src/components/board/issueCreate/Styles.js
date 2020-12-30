import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { color } from '../../shared/constants/styles';

export const Title = styled.div`
  font-size: 2.5rem;
  color: rgba(0,0,0,.8);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
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

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 2.5rem;
  background-color: #fff;
  padding: 2.5rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;
  form {
    display: grid;
    grid-gap: 2.5rem;
  }
`;

export const FormGroup = styled.div`

`;

export const FormTitle = styled.div`
  font-size: 1.2rem;
  color: rgba(0,0,0,.8);
  margin-bottom: .5rem;
  font-weight: bold;
`;

export const FormCaption = styled.div`
  font-size: 10px;
  color: rgba(0,0,0,.8);
  margin-top: .7rem;
  font-weight: bold;
`;

export const FormError = styled.p`
  font-size: 1rem;
  color: red;
  margin-top: .5rem;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 1rem;
  width: 100%;
  outline: none;
  background-color: #fafafa;
  border-radius: 5px;
  font-weight: 400;
  font-size: 1.2rem;
  border: 1px solid ${color.backgroundLight};
  &:focus {
    border: 2px solid #4c9aff;
    background: #fff;
  }
`;
export const Editor = styled.div`
  font-size: 3rem;
`;


export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  padding: 5px 10px;
  font-size: 1rem;
  margin-left: 1rem;
  border: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 1rem;
  transition: ease-in .01s;
  background: #e7e7e7;

  &:hover {
    transform: translateY(-1px);
  }
  &:active{
    transform: translateY(1px);
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 1rem;
  margin-left: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 1rem;
  transition: ease-in .01s;

  &:hover {
    transform: translateY(-1px);
  }
  &:active{
    transform: translateY(1px);
  }
`;

export const PrimaryButton = styled(Button)`
  color: #fff;
  background-color: ${color.success};
`;