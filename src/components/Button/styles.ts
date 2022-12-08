import styled from "styled-components";
import MuiButton from "@mui/material/Button";
import { darken } from "polished";

export const MuiButtonStyled = styled(MuiButton)<{
  width: string;
  margin: string;
}>`
  color: #fff;
  font-family: "Fredoka";
  font-size: 14px;
  border-radius: 25px;
  width: ${(props) => props.width};
  /* box-shadow: -5px 5px 20px 0px #00000040; */
  margin: ${(props) => props.margin};

  :hover {
    background-color: ${(props) =>
      darken(0.1, props.theme.palette.primary.main)};
  }
`;
