import styled from "styled-components";
import MuiButton from "@mui/material/Button";
import { darken } from "polished";

export const MuiButtonStyled = styled(MuiButton)`
  color: #fff;
  font-family: "Fredoka";
  font-size: 14px;
  border-radius: 25px;
  width: 100%;
  margin: 16px 0px 8px 0px;

  :hover {
    background-color: ${(props) =>
      darken(0.1, props.theme.palette.primary.main)};
  }
`;
