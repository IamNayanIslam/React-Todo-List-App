import styled from "styled-components";

export const StyledForm = styled.form`
  width: 400px;
  padding: 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  background: #414549;

  @media screen and (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 20px;
  }
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
