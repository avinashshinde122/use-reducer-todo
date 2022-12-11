import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import TaskInput from "./TaskInput";
import Task from "./Task";
import { useTodoContext } from "../store/TodoContextProvider";

const App = () => {
  const [{ tasks }] = useTodoContext();
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.default,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Todo App</Typography>
      <Grid container flexDirection="column" sx={{ width: "60%" }}>
        <Grid item>
          <TaskInput />
        </Grid>

        <Grid item>
          {tasks?.map((task) => (
            <Task task={task} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
