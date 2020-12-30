import styled from 'styled-components';
import {color} from '../../../shared/constants/styles';
import TextareaAutosize from 'react-textarea-autosize';

export const TitleTextArea = styled(TextareaAutosize)`
  resize: none;
  border-radius: 5px;
  font-weight: 400;
  font-size: 20px;
  border: none;
  color: rgba(0,0,0,.7);
  font-weight: bold;
  padding: 10px 0;
  &:focus {
    border: 2px solid #4c9aff;
    padding: 5px
  }
  &:hover:not(:focus) {
    background-color: ${color.backgroundLightest};
  }
`;