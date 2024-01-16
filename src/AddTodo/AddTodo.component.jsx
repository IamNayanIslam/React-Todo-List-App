import { useContext, useEffect } from "react";
import { StyledButton, StyledForm } from "./AddTodo.styled";
import { GlobalContext } from "../Context/GlobalContext";
import { LuClipboardEdit } from "react-icons/lu";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const AddTodo = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      description: e.target.description.value,
      isComplete: false,
      isEdit: false,
    };

    if (newTodo.description.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Invalid Entry",
        text: "Please enter a valid description!",
      });
      e.target.description.value = "";
      return;
    }

    if (newTodo.description.trim().length > 30) {
      Swal.fire({
        icon: "warning",
        title: "Sorry",
        text: "The description can't be longer than 30 characters! ",
      });
      e.target.description.value = "";
      return;
    }

    dispatch({ type: "ADD_TODO", payload: newTodo });
    e.target.description.value = "";
  };

  return (
    <>
      <h1>
        {" "}
        <LuClipboardEdit /> Todo List App
      </h1>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo Description"
          name="description"
        />
        <StyledButton>Add Todo</StyledButton>
      </StyledForm>
    </>
  );
};

export default AddTodo;
