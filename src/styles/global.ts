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

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    scrollbar-color: #123456 green
  }

  body, input, button {
    /* color: #222; */
    font-size: 14px;
    font-family: "Roboto", sans-serif, Arial;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
