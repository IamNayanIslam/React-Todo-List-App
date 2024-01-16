import styled from "styled-components";

export const StyledTodosContainer = styled.ul`
  width: 440px;
  min-height: 50vh;
  margin: 0 auto;
  padding: 20px 0px;
  background: #414549;

  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
