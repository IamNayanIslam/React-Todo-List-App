import AddTodo from "./AddTodo/AddTodo.component";
import { StyledContainer } from "./App.styled";
import Todos from "./Todos/Todos.component";

function App() {
  return (
    <>
      <StyledContainer>
        <AddTodo />
        <Todos />
      </StyledContainer>
    </>
  );
}

export default App;
