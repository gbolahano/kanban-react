import styled from 'styled-components';

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: rgba(0,0,0,.7);
  margin-bottom: 15px;
`;


export const CommentForm = styled.div`
  display: flex;
`;

export const CommentFormDiv = styled.div`
  display: grid;
  margin-top: 10px;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  margin-right: 10px;
`;

export const CommentTextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  background-color: #e7e7e7;
  font-weight: 400;
  font-size: 12px;
  border: none;
  color: rgba(0,0,0,.7);
  font-weight: bold;
  &:focus {
    border: 2px solid #4c9aff;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 1rem;
  margin-left: 40px;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 10px;
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