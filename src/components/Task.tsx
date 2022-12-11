import { ListItem, Typography } from "@mui/material";
import React from "react";
import { mapDisptch } from "../store/reducer";
import { useTodoContext } from "../store/TodoContextProvider";
import { Task as TaskType } from "../Types";

type TaskProps = {
  task: TaskType;
};
const Task = ({ task }: TaskProps) => {
  const [, dispatch] = useTodoContext();
  const actions = mapDisptch(dispatch);
  return (
    <>
      <ListItem onClick={() => actions.updateTask(task)}>
        <Typography
          sx={{
            textDecoration: task.completed ? "line-through" : "",
          }}
        >
          {task.name}
        </Typography>
      </ListItem>
    </>
  );
};

export default Task;
