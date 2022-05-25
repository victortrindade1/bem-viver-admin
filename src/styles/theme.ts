import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#123fff",
      dark: "#f54",
    },
    secondary: {
      main: "#654321",
    },
  },
  //custom theme variables
  bg: {
    main: "#fff",
    light: "#F4F5F7",
  },
  text: {
    main: "#172B4D",
    light: "#262930",
  },
});

export default theme;
