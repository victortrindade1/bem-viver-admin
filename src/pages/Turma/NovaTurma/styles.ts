import styled from "styled-components";
import media from "utils/media";

export const Container = styled.div`
  @media (min-width: ${media.smallUp}) {
    max-width: 300px;
    margin: 30px;
  }

  @media (min-width: ${media.mediumUp}) {
    max-width: 300px;
  } ;
`;

export const ButtonContainer = styled.div`
  width: 167px;
  margin: 20px 0px;
`;
