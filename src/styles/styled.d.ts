import "styled-components";
import { Theme } from "@mui/material/styles";

interface IPalette {
  main: string;
  contrastText: string;
}

interface CustomTheme {
  palette: {
    primary: IPalette;
    secondary: IPalette;
  };
  bg: {
    main: string;
    light: string;
  };
  logo: {
    rosa: string;
    azul: string;
    verdeClaro: string;
    verdeEscuro: string;
    laranja: string;
    amarelo: string;
  };
}
declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
