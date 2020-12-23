import styled from 'styled-components';
import ReactQuill from 'react-quill';

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: rgba(0,0,0,.7);
  margin-bottom: 15px;
`;

export const Editor = styled.div`
  font-size: 40px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 1rem;
  margin-right: 10px;
  border: none;
  background-color: #e7e7e7;
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

export const DangerButton = styled(Button)`
  color: #fff;
  background-color: #df1313;
`;
export const SuccessButton = styled(Button)`
  color: #fff;
  background-color: #09ac52;
`;

export const ReactQuilll = styled(ReactQuill)`
  & > * {
    font-size: 30px;
  }
`;