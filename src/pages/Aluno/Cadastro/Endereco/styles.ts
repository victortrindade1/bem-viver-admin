import styled from "styled-components";
// import media from "styled-media-query";
import media from "utils/media";

export const Container = styled.div`
  display: grid;
  justify-content: space-around;
  margin-top: 30px;

  @media (max-width: ${media.medium}) {
    margin: 20px;
    justify-content: start;
  }

  @media (min-width: ${media.mediumUp}) {
    grid-template-columns: 0.4fr 0.4fr;
  }
`;
