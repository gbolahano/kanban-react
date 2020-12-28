import styled from 'styled-components';

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: rgba(0,0,0,.7);
  margin-bottom: 1.5rem;
`;


export const CommentForm = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const CommentFormDiv = styled.div`
  display: grid;
  margin-top: 1rem;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  margin-right: 1rem;
  width: 2.5rem;
`;

export const Name = styled.div`
  font-size: 15px;
  margin-bottom: .7rem;
`;

export const CommentBody = styled.div`
  font-size: 13px;
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

export const PrimaryButton = styled(Button)`
  color: #fff;
  background-color: #4c9aff;
`;