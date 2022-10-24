import styled from "styled-components";
import media from "styled-media-query";
import MuiButton from "@mui/material/Button";
import { darken } from "polished";

export const Title = styled.div`
  font-family: "Fredoka";
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  ${media.lessThan("small")`
    font-size: 20px;
    text-align: center;
    padding: 22px;
  `};

  ${media.greaterThan("small")`
  font-size: 40px;

  `};
`;

export const FormContainerWrapper = styled.div`
  ${media.lessThan("small")`
    margin: 0 7vw;
  `};

  ${media.between("small", "medium")`
  margin-top: 20vh;
  `};

  ${media.greaterThan("medium")`
  margin-top: 8vh;

  `};
`;

export const LoginButtonContainer = styled.div`
  margin: 0 5vw;
  position: absolute;
  left: 0;
  right: 0;

  ${media.lessThan("small")`
    bottom: -20px;
  `};

  ${media.greaterThan("small")`
    bottom: 20px;
  `};
`;

export const LoginButton = styled(MuiButton).attrs({
  variant: "contained",
})`
  color: #fff;
  font-family: "Fredoka";
  font-size: 14px;
  border-radius: 25px;
  width: 100%;
  box-shadow: -5px 5px 20px 0px #00000040;

  :hover {
    background-color: ${darken(0.1, "#AA96DA")};
  }
`;
