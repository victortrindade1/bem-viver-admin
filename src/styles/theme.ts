import { createTheme } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#AA96DA",
        light: "#959693",
        dark: "#535353",
        contrastText: "",
      },
      secondary: {
        main: "#c5fad5",
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
  },
  ptBR
);

export default theme;
