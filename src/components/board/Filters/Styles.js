import styled from 'styled-components';

export const Filters = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    margin-right: 30px;
    figure {
      img {
        width: 35px;
        height: 35px;
        border-radius: 100%;
        border: 2px solid #fff;
        margin-right: -7px;
        cursor: pointer;
        &:hover {
          transform: translateY(-3px);
        }
      }
    }
  }
  button{
    outline: none;
    display: block;
    background-color: #fafafa;
    padding: 6px 15px;
    font-size: 1.2rem;
    border: 0px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: rgba(#cccccc, .6);
    }
  }
`;