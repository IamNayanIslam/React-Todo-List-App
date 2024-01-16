import styled from "styled-components";

export const StyledTodoContainer = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #40a4ff;
  padding: 5px 20px;
  padding-bottom: 10px;

  @media screen and (max-width: 500px) {
    padding: 0px 20px;
  }

  .icon {
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s ease-in-out all;
  }

  .checkbox-yellow {
    color: #f7da86;
  }

  .checkbox-green {
    color: #6cc49a;
  }

  input {
    text-align: center;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #40a4ff;
    margin: 10px 0;
    color: #fff;
  }

  p {
    font-size: 16px;
    color: #40a4ff;
  }

  .complete {
    color: #6cc49a;
    text-decoration: line-through;
  }
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-around;

  .edit {
    color: #40a4ff;
    &:hover {
      transform: scale(1.2);
      transition: 0.3s ease-in-out all;
    }
  }

  .delete {
    color: #d44d52;
    &:hover {
      transform: scale(1.2);
      transition: 0.3s ease-in-out all;
    }
  }
`;

export const StyledNoTodo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  img {
    width: 200px;
    margin-bottom: 20px;
  }
`;
