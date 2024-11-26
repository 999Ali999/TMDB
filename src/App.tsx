// import { Counter } from "./features/counter/Counter";
import { Box } from "@mui/material";

import Header from "./components/Header";
import { Outlet } from "react-router";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

import type { RootState } from "./app/store";

function App() {
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode);

  const darkTheme = createTheme({
    palette: {
      mode: darkmode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Header />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
