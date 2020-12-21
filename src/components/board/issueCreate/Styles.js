import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Title = styled.div`
  font-size: 25px;
  color: rgba(0,0,0,.8);
  font-weight: bold;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 25px;
  background-color: #fff;
  padding: 35px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;
`;

export const FormGroup = styled.div`

`;

export const FormTitle = styled.div`
  font-size: 12px;
  color: rgba(0,0,0,.8);
  margin-bottom: 5px;
  font-weight: bold;
`;

export const FormCaption = styled.div`
  font-size: 10px;
  color: rgba(0,0,0,.8);
  margin-top: 7px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 10px;
  width: 100%;
  outline: none;
  background-color: #fafafa;
  border-radius: 5px;
  font-weight: 400;
  font-size: 12px;
  border: 1px solid #e7e7e7;
  &:focus {
    border: 2px solid #4c9aff;
    background: #fff;
  }
`;
export const Editor = styled.div`
  font-size: 30px;
`;


export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  padding: 5px 10px;
  font-size: 1rem;
  margin-left: 10px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 10px;
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
  margin-left: 10px;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 10px;
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
  background-color: #4c9aff;
`;