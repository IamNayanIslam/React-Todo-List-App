/* import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext"; */
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { StyledBtnContainer, StyledTodoContainer } from "./SingleTodo.styled";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const SignleTodo = ({ todo }) => {
  const updateInputRef = useRef(null);
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    todo.isEdit && (updateInputRef.current.value = todo.description);
  }, [todo]);

  const toggleComplete = () => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id });
  };
  const handelEdit = () => {
    dispatch({ type: "IS_EDITING", payload: todo.id });
  };
  const handelUpdate = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_TODO",
      payload: { id: todo.id, description: updateInputRef.current.value },
    });
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
        {todo.isEdit ? (
          <form action="" onSubmit={handelUpdate}>
            <input ref={updateInputRef} />
          </form>
        ) : (
          <p className={todo.isComplete && "complete"}>{todo.description}</p>
        )}
        <StyledBtnContainer>
          {!todo.isEdit ? (
            <FaEdit onClick={handelEdit} className="icon edit" />
          ) : (
            <FaCheckSquare onClick={handelUpdate} className="icon edit" />
          )}
          <MdDelete className="icon delete" onClick={deleteTodo} />
        </StyledBtnContainer>
      </StyledTodoContainer>
    </>
  );
};

export default SignleTodo;
