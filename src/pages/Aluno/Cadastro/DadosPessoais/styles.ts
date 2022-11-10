import styled from "styled-components";
import media from "styled-media-query";

export const Grid = styled.div`
  display: grid;
  justify-content: space-around;
  margin-top: 30px;

  ${media.lessThan("medium")`
    margin: 20px;
    justify-content: start;
  `};

  ${media.greaterThan("medium")`
    grid-template-columns: 0.4fr 0.4fr;
  `};
`;
