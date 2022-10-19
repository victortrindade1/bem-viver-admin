import styled from "styled-components";
import media from "styled-media-query";
import MuiButton from "@mui/material/Button";
import { darken } from "polished";

import { ReactComponent as Logo } from "assets/svg/logo_branca.svg";

export const Container = styled.div`
  display: flex;

  ${media.lessThan("small")`
    flex-direction: column;
  `};
  ${media.greaterThan("small")`
    flex-direction: row;
  `};
`;

export const DarkSideContainer = styled.div`
  background-color: #aa96da;

  ${media.lessThan("small")`
    height: 50vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
  `};

  ${media.greaterThan("small")`
    height: 100vh;
    width: 40vw;
  `};
`;

export const LightSideContainer = styled.div`
  background-color: #c5fad5;
  ${media.lessThan("small")`
    height: 50vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
  `};

  ${media.greaterThan("small")`
    height: 100vh;
    width: 60vw;
  `};
`;

export const DarkSide = styled.div`
  background-color: #aa96da;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan("small")`
    margin: 9vw 0vw 9vw 9vw;
    box-shadow: -5px 5px 20px 0px #00000040;
    height: calc(100vh - 18vw);
    width: 31vw;
    border-radius: 8px 0px 0px 8px;
  `};

  ${media.greaterThan("medium")`
    margin: 5vw 0vw 5vw 5vw;
    height: calc(100vh - 10vw);
    width: 35vw;
  `};
`;

export const LightSide = styled.div`
  background-color: #fff;
  position: absolute;

  ${media.lessThan("small")`
    width: 80vw;
    height: 40vh;
    top: -60px;
    border-radius: 8px;
    box-shadow: 5px 5px 20px 0px #00000040;
  `};

  ${media.greaterThan("small")`
    margin: 9vw 9vw 9vw 0;
    box-shadow: 5px 5px 20px 0px #00000040;
    height: calc(100vh - 18vw);
    width: 51vw;
    border-radius: 0px 8px 8px 0px;

    padding: 7vw;
  `};

  ${media.greaterThan("medium")`
    padding: 5vw;
    margin: 5vw 5vw 5vw 0vw;
    height: calc(100vh - 10vw);
    width: 55vw;
  `};
`;

export const LogoStyled = styled(Logo).attrs({
  fill: "rgba(255, 255, 255, 0.5)",
})`
  margin: 20px;

  ${media.lessThan("small")`
    width: 54vw;
  `};

  ${media.between("small", "large")`
    width: 20vw;
  `};

  ${media.greaterThan("large")`
    width: 14vw;
  `};
`;

export const Text = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Fredoka";
  padding: 12px;
`;

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
