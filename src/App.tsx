import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider } from "styled-components";

import AppRoutes from "./routes";

import theme from "styles/theme";
import GlobalStyle from "styles/global";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
