import styled from 'styled-components';

export const TitleTextArea = styled.textarea`
  resize: none;
  border-radius: 5px;
  font-weight: 400;
  font-size: 20px;
  border: none;
  color: rgba(0,0,0,.7);
  font-weight: bold;
  &:focus {
    border: 2px solid #4c9aff;
  }
  &:hover:not(:focus) {
    background-color: #e7e7e7;
  }
`;