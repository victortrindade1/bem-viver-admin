import styled from "styled-components";
// import { lighten } from "polished";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
`;

export const BodyMenuContainer = styled.div`
  min-width: 15vw;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: calc(100vh - 215px);
  margin: 0 15px;
  border-radius: 4px;
  background-color: #fff;

  ${media.lessThan("small")`
    padding: 20px;
  `};

  ${media.between("small", "medium")`
    padding: 30px;
  `};

  ${media.greaterThan("medium")`
    padding: 60px;
  `};
`;
