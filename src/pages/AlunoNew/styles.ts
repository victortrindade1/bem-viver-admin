import styled from "styled-components";
import media from "utils/media";

export const Container = styled.div`
  @media (min-width: ${media.smallUp}) {
    max-width: 400px;
    margin: 30px;
  }

  @media (min-width: ${media.mediumUp}) {
    max-width: 400px;
  } ;
`;
