import styled from "styled-components";
import media from "utils/media";

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 80%;

  @media (max-width: ${media.small}) {
    /* padding: 40px; */
    /* width: 80vw; */
  }

  @media (min-width: ${media.smallUp}) {
    /* width: 80vw; */
    /* padding: 40px 70px; */
  }

  @media (min-width: ${media.mediumUp}) {
    max-width: 50vw;
    /* padding: 45px 80px 60px 80px; */
  }
`;

export const Header = styled.div`
  height: 140px;
  /* min-height: 100px; */
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  background-color: ${(props) => props.theme.palette.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  border: ${(props) => props.theme.palette.primary.main} solid 3px;
  padding: 10px;
  width: 60px;
  border-radius: 50px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 30px;
    height: 30px;
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.palette.primary.main};
  font-family: "Fredoka";
  font-size: 18px;
  padding-top: 10px;
`;

export const Body = styled.div`
  margin-bottom: 60px;
  margin-top: 20px;

  /* position: relative; */
  /* width: 80%; */
  padding: 0px 40px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.palette.primary.dark};
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: -20px;
`;
