import styled from "styled-components";
import media from "utils/media";

export const Wrapper = styled.div``;

export const BodyChildren = styled.div`
  display: flex;
  flex: 1;
  height: calc(100% - 72px);
  position: absolute;
  top: 72px;
  width: 100%;
  flex-direction: row;

  @media (max-width: ${media.medium}) {
    flex-direction: column;
  }
`;
