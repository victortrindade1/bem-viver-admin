import styled from "styled-components";
import { darken } from "polished";

import theme from "styles/theme";
import media from "styled-media-query";

const backgroundColor = theme.palette.secondary.main;

export const Wrapper = styled.div`
  /* height: auto;
  min-height: 100%;
  background-color: ${backgroundColor};
  background-image: linear-gradient(
    132deg,
    ${backgroundColor} 0%,
    ${darken(0.15, backgroundColor)} 100%
  ); */
`;

export const BodyChildren = styled.div`
  /* padding-top: 72px; */
  display: flex;
  flex: 1;
  height: calc(100% - 72px);
  position: absolute;
  top: 72px;
  width: 100%;
  ${media.lessThan("small")`
    flex-direction: column;
  `};
  ${media.greaterThan("small")`
    flex-direction: row;
  `};
`;
