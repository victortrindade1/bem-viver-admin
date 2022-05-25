import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider } from "styled-components";

import AppRoutes from "./routes";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import theme from "styles/theme";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
