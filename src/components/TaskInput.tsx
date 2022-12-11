import React, { FormEvent, useState } from "react";
import { TextField } from "@mui/material";
import { useTodoContext } from "../store/TodoContextProvider";
import { mapDisptch } from "../store/reducer";

const TaskInput = () => {
  const [name, setName] = useState("");
  const [, dispatch] = useTodoContext();
  const actions = mapDisptch(dispatch);
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    actions.addTask(name);
    setName("");
  };
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <TextField
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </form>
  );
};
export default TaskInput;
