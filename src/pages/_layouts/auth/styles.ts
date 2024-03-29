import styled from "styled-components";
import media from "utils/media";

import { ReactComponent as Logo } from "assets/svg/logo_branca.svg";

export const Container = styled.div`
  display: flex;

  @media (max-width: ${media.small}) {
    flex-direction: column;
  }

  @media (min-width: ${media.smallUp}) {
    flex-direction: row;
  }
`;

export const DarkSideContainer = styled.div`
  background-color: #aa96da;

  @media (max-width: ${media.small}) {
    height: 50vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: ${media.smallUp}) {
    height: 100vh;
    width: 40vw;
  } ;
`;

export const LightSideContainer = styled.div`
  background-color: #c5fad5;
  @media (max-width: ${media.small}) {
    height: 50vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
  }

  @media (min-width: ${media.smallUp}) {
    height: 100vh;
    width: 60vw;
  } ;
`;

export const DarkSide = styled.div`
  background-color: #aa96da;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${media.smallUp}) {
    margin: 9vw 0vw 9vw 9vw;
    box-shadow: -5px 5px 20px 0px #00000040;
    height: calc(100vh - 18vw);
    width: 31vw;
    border-radius: 8px 0px 0px 8px;
  }

  @media (min-width: ${media.mediumUp}) {
    margin: 5vw 0vw 5vw 5vw;
    height: calc(100vh - 10vw);
    width: 35vw;
  }
`;

export const LightSide = styled.div`
  background-color: #fff;
  position: absolute;

  @media (max-width: ${media.small}) {
    width: 80vw;
    min-height: 300px;
    top: -60px;
    border-radius: 8px;
    box-shadow: 5px 5px 20px 0px #00000040;
    padding-bottom: 40px;
  }

  @media (min-width: ${media.smallUp}) {
    margin: 9vw 9vw 9vw 0;
    box-shadow: 5px 5px 20px 0px #00000040;
    height: calc(100vh - 18vw);
    width: 51vw;
    border-radius: 0px 8px 8px 0px;

    padding: 7vw;
  }

  @media (min-width: ${media.mediumUp}) {
    padding: 5vw;
    margin: 5vw 5vw 5vw 0vw;
    height: calc(100vh - 10vw);
    width: 55vw;
  } ;
`;

export const LogoStyled = styled(Logo).attrs({
  fill: "rgba(255, 255, 255, 0.5)",
})`
  margin: 20px;

  @media (max-width: ${media.small}) {
    width: 54vw;
  }

  @media (min-width: ${media.smallUp}) and (max-width: ${media.large}) {
    width: 20vw;
  }

  @media (min-width: ${media.largeUp}) {
    width: 14vw;
  }
`;

export const Text = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Fredoka";
  padding: 12px;
`;
