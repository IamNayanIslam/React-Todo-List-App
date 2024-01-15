import styled from "styled-components";

export const StyledForm = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: #414549;
  input {
    flex: 1;
    padding: 8px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #40a4ff;
    background: transparent;
    &:focus {
      outline: 1px solid #40a4ff;
    }

    &::placeholder {
      color: #40a4ff;
    }
  }
`;

export const StyledButton = styled.button`
  padding: 10px 25px;
  border: none;
  outline-color: transparent;
  border-radius: 20px;
  background: #40a4ff;
  color: #fff;
  cursor: pointer;
`;
