// import { Theme } from "@mui/styled-engine-sc/styles";
// import { MyTheme } from "styles/styled";
import styled from "styled-components";

export const Container = styled.div`
  /* background: ${(props) => props.theme.bg.main}; */
  height: 100%;
  padding-top: 72px;

  h1 {
    color: ${(props) => props.theme.palette.primary.dark} !important;
  }
`;
