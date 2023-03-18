//1. init state
import { ADD_TODO_INPUT, DELETE_ALL_TODO_INPUT, DELETE_TODO_INPUT, EDIT_TODO_INPUT, SET_TODO_INPUT } from "./Contants.js";

const initState = {
  inputToDo: "",
  toDo: JSON.parse(localStorage.getItem("todo")) ?? [],
};

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case SET_TODO_INPUT:
      newState = {
        ...state,
        inputToDo: action.payload,
      };
      break;
    case ADD_TODO_INPUT:
      newState = {
        ...state,
        toDo: [...state.toDo, action.payload],
      };
      break;
    case DELETE_TODO_INPUT:
      const newToDo = [...state.toDo];
      newToDo.splice(action.payload, 1);
      newState = {
        ...state,
        toDo: newToDo,
      };
      break;
    case EDIT_TODO_INPUT:
      const editToDo = [...state.toDo];
      editToDo.splice(action.key, 1, action.payload);
      newState = {
        ...state,
        toDo: editToDo,
      };
      break;
    case DELETE_ALL_TODO_INPUT:
      let newToDos = [...state.toDo];
      newToDos = [];
      newState = {
        ...state,
        toDo: newToDos,
      };
      break;
    default:
      throw new Error("Invalid action.");
  }
  localStorage.setItem("todo", JSON.stringify(newState.toDo));
  return newState;
}

export { initState };
export default reducer;
