import styled from "styled-components";
import { darken } from "polished";

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

export const ModalText = styled.div`
  span {
    color: ${(props) => props.theme.palette.warning.main};
    /* font-weight: bold;
    font-size: 26px; */
  }
`;

export const ExcluirContainer = styled.div`
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: appear 1s ease;

  border: 1px ${(props) => props.theme.palette.warning.main} solid;
  border-radius: 4px;
  font-size: 11px;
  padding: 2px 10px;
  color: ${(props) => props.theme.palette.warning.main};
  transition: 0.5s;
  margin: 16px 0px 8px 0px;

  :hover {
    cursor: pointer;
    border: 1px solid
      ${(props) => darken(0.1, props.theme.palette.warning.main)};
    background-color: ${(props) => props.theme.palette.warning.main};
    color: #fff;
  }
`;

export const AtivoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;
