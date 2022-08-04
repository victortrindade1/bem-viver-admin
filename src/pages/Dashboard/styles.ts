// import { Theme } from "@mui/styled-engine-sc/styles";
// import { MyTheme } from "styles/styled";
import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.palette.primary.dark};
  font-family: "Roboto";
  font-weight: 300;

  h1 {
    font-weight: 300;
  }
`;
