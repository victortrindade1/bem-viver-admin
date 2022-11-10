import styled from "styled-components";
import media from "styled-media-query";

export const Grid = styled.div`
  display: grid;
  margin-top: 30px;

  ${media.lessThan("small")`
    margin: 20px;
  `};

  ${media.between("small", "medium")`
    margin: 20px;
    max-width: 50vw;
  `};

  ${media.greaterThan("medium")`
    justify-content: space-around;
    grid-template-columns: 0.26fr 0.26fr 0.26fr;
  `};
`;
