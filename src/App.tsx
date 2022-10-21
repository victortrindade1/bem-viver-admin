// import { useState, useEffect } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider } from "styled-components";

// import "config/ReactotronConfig";

import MyRoutes from "./routes";
// import AppRoutes from "routes";

import { AuthProvider } from "./contexts/auth";

import theme from "styles/theme";
import GlobalStyle from "styles/global";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const onPageLoad = () => {
  //     setIsLoading(false);
  //   };

  //   if (document.readyState === "complete") {
  //     onPageLoad();
  //   } else {
  //     window.addEventListener("load", onPageLoad);

  //     return () => window.removeEventListener("load", onPageLoad);
  //   }
  // }, []);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            {/* {!isLoading && <MyRoutes />} */}
            <MyRoutes />
            {/* <AppRoutes /> */}
          </AuthProvider>
          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
