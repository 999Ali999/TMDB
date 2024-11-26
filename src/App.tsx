// import { Counter } from "./features/counter/Counter";
import { Box, Button } from "@mui/material";

import Header from "./components/Header";
import { Outlet } from "react-router";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "./app/store";
import { toggleDarkmode } from "./features/darkmode/darkmodeSlice";

function App() {
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode);
  const dispatch = useDispatch();

  const darkTheme = createTheme({
    palette: {
      mode: darkmode ? "dark" : "light",
    },
  });

  console.log(darkmode);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Header />
        <Outlet />
        <Button onClick={() => dispatch(toggleDarkmode())}>change theme</Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
