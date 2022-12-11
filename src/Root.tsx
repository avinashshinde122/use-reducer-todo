import React, { Component } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "vibgyor";
import App from "./components/App";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

type AppProps = {
  name: string;
};

type AppState = {
  mode: string;
};
export class Root extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      mode: "dark",
    };
    this.toggleColorMode = this.toggleColorMode.bind(this);
  }

  toggleColorMode() {
    const { mode } = this.state;
    if (mode === "dark") {
      this.setState({ mode: "light" });
    } else {
      this.setState({ mode: "dark" });
    }
  }

  render() {
    return (
      <ThemeProvider theme={createTheme(this.state.mode)}>
        <IconButton
          sx={{
            ml: 1,
            position: "absolute",
            right: 0,
            color: "#004D40",
            background: "#F2E9E4",
          }}
          onClick={this.toggleColorMode}
          color="inherit"
        >
          {this.state.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <App />
      </ThemeProvider>
    );
  }
}

export default Root;
