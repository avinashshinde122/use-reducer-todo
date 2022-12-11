import { useReducer } from "react";
import { TodoState, Task } from "../Types";

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  UPDATE_TODO: "UPDATE_TODO",
};

const initialState = { tasks: [] };

const reducer = (
  state: TodoState,
  action: { type: string; payload: Task }
): TodoState => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case ACTIONS.UPDATE_TODO: {
      const updatedTasks = state.tasks.map((t) =>
        t.id === action.payload.id ? { ...t, completed: !t.completed } : t
      );
      return { ...state, tasks: updatedTasks };
    }
    default:
      return state;
  }
};
export const getReducer = () => useReducer(reducer, initialState);

export const mapDisptch = (dispatch: any) => ({
  addTask: (payload: string) =>
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        name: payload,
        completed: false,
        id: Number(new Date()),
      },
    }),
  updateTask: (payload: Task) =>
    dispatch({
      type: ACTIONS.UPDATE_TODO,
      payload,
    }),
});
