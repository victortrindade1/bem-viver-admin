import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
      light: "#959693",
      dark: "#222",
      contrastText: "",
    },
    secondary: {
      main: "#666",
    },
    // error: {},
    // warning: {},
    // info: {},
    // success: {},
  },
  //custom theme variables
  bg: {
    main: "#DEE5E8",
    light: "#fff",
  },
  logo: {
    rosa: "#C8528e",
    azul: "#78BCC6",
    verdeClaro: "#B6CA56",
    verdeEscuro: "#5DAF9B",
    laranja: "#e7a746",
    amarelo: "#EEc744",
  },
});

export default theme;
