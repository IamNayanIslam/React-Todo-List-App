import SignleTodo from "../SignleTodo/SignleTodo.component";
import { StyledTodosContainer } from "./Todos.styled";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { StyledNoTodo } from "../SignleTodo/SingleTodo.styled";

const Todos = () => {
  const { state } = useContext(GlobalContext);

  return (
    <>
      <StyledTodosContainer>
        {state?.todos.length > 0 ? (
          state.todos.map((todo) => <SignleTodo key={todo.id} todo={todo} />)
        ) : (
          <>
            <StyledNoTodo>
              <img src="./nothing.png" alt="No Task" />
              <h2>There is no task!</h2>
            </StyledNoTodo>
          </>
        )}
      </StyledTodosContainer>
    </>
  );
};

export default Todos;
