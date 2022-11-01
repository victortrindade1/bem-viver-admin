import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

import MyRoutes from "./routes";

import { AuthProvider } from "./contexts/auth";

import theme from "styles/theme";
import GlobalStyle from "styles/global";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <AnimatePresence>
              <MyRoutes />
            </AnimatePresence>
          </AuthProvider>
          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
