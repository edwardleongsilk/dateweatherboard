import React, { useState } from "react";
import "./App.css";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Content from "./components/Content";

import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { ThemeProvider } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Header from "./components/Header";
import FormControlLabel from "@material-ui/core/FormControlLabel";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: {
        main: purple[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container>
          <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        </Grid>
        <Grid container>
          <Content />
        </Grid>

        <Grid container></Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
