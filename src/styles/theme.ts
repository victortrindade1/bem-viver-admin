import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2f3c7e",
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
  // P/ usar useMediQuery sem renderizar 2 vezes (sem renderizar no servidor)
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
});

export default theme;
