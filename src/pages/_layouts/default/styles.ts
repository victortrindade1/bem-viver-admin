import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div``;

export const BodyChildren = styled.div`
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
