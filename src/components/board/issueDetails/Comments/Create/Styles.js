import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { color } from '../../../../shared/constants/styles';

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: rgba(0,0,0,.7);
  margin-bottom: 1.5rem;
`;

export const CommentForm = styled.div`
  display: flex;
`;

export const CommentFormDiv = styled.div`
  display: grid;
  margin-top: 1rem;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  margin-right: 1rem;
`;

export const CommentTextArea = styled(TextareaAutosize)`
  width: 100%;
  resize: none;
  border-radius: 5px;
  font-weight: 400;
  font-size: 1.2rem;
  border: none;
  color: rgba(0,0,0,.7);
  font-weight: bold;
  padding: 10px 5px;
  &:focus {
    border: 1px solid #4c9aff;
  }
  &:hover:not(:focus) {
    background-color: ${color.backgroundLightest};
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 1rem;
  margin-left: 4rem;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 1rem;
  transition: ease-in .01s;
  background-color: #09ac52;

  &:hover {
    transform: translateY(-3px);
  }
  &:active{
    transform: translateY(3px);
  }
`;

// .btn-delete {
//   background-color: #df1313;
// }

// .btn-success {
//   background-color: #09ac52;
// }