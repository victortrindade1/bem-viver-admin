import media from "utils/media";
import styled from "styled-components";
import { IChildren } from "types/layout";

export const Container = styled.div`
  height: auto;
  display: flex;
  background-color: ${(props) => props.theme.palette.primary.main};

  @media (max-width: ${media.medium}) {
    width: 100%;
    height: 80px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  @media (min-width: ${media.mediumUp}) {
    align-items: center;
    justify-content: flex-end;
    width: 200px;
  }
`;

export const BodyMenuContainer = styled.div<IChildren>`
  background-color: ${(props) => props.theme.palette.primary.main};
  box-shadow: -5px 5px 20px 0px #00000040;
  z-index: 2;
  border-radius: 4px 0px 0px 4px;
  width: 170px;
  height: 90%;

  @media (max-width: ${media.medium}) {
    border-radius: 4px 4px 0px 0px;
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: center;
  }

  @media (min-width: ${media.mediumUp}) {
    min-height: calc(0.9 * (100vh - 72px));
    overflow: auto;
  }
`;
