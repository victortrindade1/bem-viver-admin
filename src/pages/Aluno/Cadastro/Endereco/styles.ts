import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: grid;
  justify-content: space-around;
  margin-top: 30px;

  ${media.lessThan("medium")`
    margin: 20px;
  `};

  ${media.greaterThan("medium")`
    grid-template-columns: 0.4fr 0.4fr;
  `};
`;
