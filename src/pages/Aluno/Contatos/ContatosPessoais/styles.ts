import styled from "styled-components";
import media from "utils/media";

export const Grid = styled.div`
  margin-top: 30px;

  @media (max-width: ${media.medium}) {
    margin: 20px;
  }

  @media (min-width: ${media.mediumUp}) {
    justify-content: space-around;
    display: grid;

    grid-template-columns: 0.26fr 0.26fr 0.26fr;
  }
`;
