import "./fonts";
import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

import { CustomTheme } from "./styled";

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast.Toastify__toast--success {
    background: ${(props) => props.theme.palette.secondary.main}80;
  }
  .Toastify__toast.Toastify__toast--error {
    background: #ffbaba80;
  }
`;

export const GlobalStyle = createGlobalStyle<{ theme: CustomTheme }>`
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
