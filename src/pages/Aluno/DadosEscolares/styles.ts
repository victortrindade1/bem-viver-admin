import styled from "styled-components";

import media from "utils/media";

export const Grid = styled.div`
  margin-top: 30px;

  @media (max-width: ${media.small}) {
    margin: 20px;
  }

  @media (min-width: ${media.smallUp}) and (max-width: ${media.medium}) {
    margin: 20px;
    max-width: 50vw;
  }

  @media (min-width: ${media.mediumUp}) {
    display: grid;

    justify-content: space-around;
    grid-template-columns: 0.26fr 0.26fr 0.26fr;
  } ;
`;

export const ModalText = styled.div`
  span {
    color: ${(props) => [props.theme.palette.warning.main]};
    font-weight: bold;
    font-size: 26px;
  }
`;
