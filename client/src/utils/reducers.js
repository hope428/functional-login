import { useReducer } from "react";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...action.todos],
      };

    case REMOVE_TODO:
      let newState = state.todos.filter((item) => {
        return item._id !== action._id;
      });
      return {
        ...state,
        todos: newState,
      };
    default:
      return state;
  }
};
