import styled from "styled-components";
import media from "styled-media-query";

export const Grid = styled.div`
  display: grid;
  margin-top: 30px;

  ${media.lessThan("medium")`
    margin: 20px;
  `};

  ${media.greaterThan("medium")`
    justify-content: space-around;
    grid-template-columns: 0.26fr 0.26fr 0.26fr;
  `};
`;
