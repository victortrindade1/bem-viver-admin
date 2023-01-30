import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import MyRoutes from "./routes";

// import { AuthProvider } from "./contexts/auth_OBSOLETO";
import { store } from "./store";

import theme from "styles/theme";
import { GlobalStyle, StyledToast } from "styles/global";

function App() {
  let persistor = persistStore(store);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {/* <AuthProvider> */}
              <AnimatePresence>
                <>
                  <MyRoutes />
                  <StyledToast autoClose={1500} />
                </>
              </AnimatePresence>
              {/* </AuthProvider> */}
            </PersistGate>
          </Provider>
          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
