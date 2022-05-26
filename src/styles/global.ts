import { createGlobalStyle } from "styled-components";
import { CustomTheme } from "./styled";
import "./fonts";

export default createGlobalStyle<{ theme: CustomTheme }>`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
    /* padding-top: 20px; */
  }

  body {
    background: ${(props) => props.theme.palette.secondary.dark};

    color: ${(props) => props.theme.palette.primary.contrastText};
    font: 400 16px Work Sans, sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: "Roboto", sans-serif, Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
