import media from "styled-media-query";
import styled from "styled-components";
import { IChildren } from "types/layout";

export const Container = styled.div`
  height: auto;
  display: flex;
  background-color: ${(props) => props.theme.palette.primary.main};
  ${media.lessThan("small")`
    width: 100%;
    height: 80px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  `};
  ${media.greaterThan("small")`
    align-items: center;
    justify-content: flex-end;
  `};
  ${media.between("small", "medium")`
    width: 150px;
  `};
  ${media.greaterThan("medium")`
    width: 200px;
  `};
`;

export const BodyMenuContainer = styled.div<IChildren>`
  background-color: ${(props) => props.theme.palette.primary.main};
  box-shadow: -5px 5px 20px 0px #00000040;

  ${media.lessThan("small")`
    border-radius: 4px 4px 0px 0px;
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: center;
  `};
  ${media.greaterThan("small")`
    border-radius: 4px 0px 0px 4px;
    height: 90%;
    min-height: calc(0.9 * (100vh - 72px));
    overflow: auto;
  `};
  ${media.between("small", "medium")`
    width: 120px;
  `};
  ${media.greaterThan("medium")`
    width: 170px;
  `};
`;
