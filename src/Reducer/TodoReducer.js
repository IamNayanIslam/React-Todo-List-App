import Swal from "sweetalert2";

export const TodoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isComplete: !todo.isComplete } : todo
        ),
      };
    case "UPDATE_TODO":
      if (payload.description.trim() === "") {
        Swal.fire({
          icon: "warning",
          title: "Invalid Entry",
          text: "Please enter a valid description!",
        });
        return state;
      }
      return {
        ...state,
        todos: state.todos.map((todo) => {
          console.log(payload);
          if (todo.id == payload.id)
            return {
              ...todo,
              description: payload.description,
              isEdit: false,
            };
          return todo;
        }),
      };
    case "IS_EDITING":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload
            ? {
                ...todo,
                isEdit: !todo.isEdit,
              }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
  }
};
