import styled from "styled-components";

import media from "utils/media";

export const Grid = styled.div`
  justify-content: space-around;
  margin-top: 30px;

  @media (max-width: ${media.medium}) {
    margin: 20px;
    justify-content: start;
  }

  @media (min-width: ${media.mediumUp}) {
    display: grid;

    grid-template-columns: 0.4fr 0.4fr;
  }
`;

export const SecondAcademicContainer = styled.div`
  margin-top: 40px;
`;
