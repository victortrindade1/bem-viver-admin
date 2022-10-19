import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider } from "styled-components";

import "config/ReactotronConfig";

import AppRoutes from "./routes";

import { AuthProvider } from "./contexts/auth";

import theme from "styles/theme";
import GlobalStyle from "styles/global";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
