import styled from 'styled-components';
import ReactQuill from 'react-quill';
import {color} from '../../../shared/constants/styles';

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: rgba(0,0,0,.7);
  margin-bottom: 15px;
`;

export const Editor = styled.div`
  min-height: 10rem;
  font-size: 4rem;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 1rem;
  margin-right: 1rem;
  border: none;
  background-color: ${color.backgroundLight};
  cursor: pointer;
  border-radius: 2px;
  margin-top: 1ren;
  transition: ease-in .01s;

  &:hover {
    transform: translateY(-1px);
  }
  &:active{
    transform: translateY(1px);
  }
`;

export const DangerButton = styled(Button)`
  color: #fff;
  background-color: ${color.danger};
`;
export const SuccessButton = styled(Button)`
  color: #fff;
  background-color: ${color.success};
`;

export const ReactQuilll = styled(ReactQuill)`
  & > * {
    font-size: 3rem;
  }
`;