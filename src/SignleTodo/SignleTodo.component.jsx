/* import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext"; */
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { StyledBtnContainer, StyledTodoContainer } from "./SingleTodo.styled";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const SignleTodo = ({ todo }) => {
  // const { state } = useContext(GlobalContext);

  const { dispatch } = useContext(GlobalContext);

  const toggleComplete = () => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id });
  };

  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };

  return (
    <>
      <StyledTodoContainer>
        {!todo.isComplete ? (
          <MdCheckBoxOutlineBlank
            className="icon checkbox-yellow"
            onClick={toggleComplete}
          />
        ) : (
          <MdCheckBox
            className="icon checkbox-green"
            onClick={toggleComplete}
          />
        )}

        <p className={todo.isComplete && "complete"}>{todo.description}</p>
        <StyledBtnContainer>
          <FaEdit className="icon edit" />
          <MdDelete className="icon delete" onClick={deleteTodo} />
        </StyledBtnContainer>
      </StyledTodoContainer>
    </>
  );
};

export default SignleTodo;
