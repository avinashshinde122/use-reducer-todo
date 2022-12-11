import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "vibgyor";
import App from "./components/App";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TodoContextProvider from "./store/TodoContextProvider";

const Root = () => {
  const [theme, setTheme] = useState("light");

  const toggleColorMode = () => {
    setTheme((prevValue) => (prevValue === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <IconButton
        sx={{
          ml: 1,
          position: "absolute",
          right: 0,
          color: "#004D40",
          background: "#F2E9E4",
        }}
        onClick={toggleColorMode}
        color="inherit"
      >
        {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </ThemeProvider>
  );
};

export default Root;
