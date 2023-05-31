import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  margin: 30px;
  max-width: 400px;
`;
export const ExcluirContainer = styled.div`
  padding-top: 10px;
  /* color: #00000050; */
  display: flex;
  align-items: center;
`;

export const ExcluirPermanenteButton = styled.div`
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
  margin-left: 10px;
  padding: 2px 10px;
  color: ${(props) => props.theme.palette.warning.main};
  transition: 0.5s;

  :hover {
    cursor: pointer;
    border: 1px solid
      ${(props) => darken(0.1, props.theme.palette.warning.main)};
    background-color: ${(props) => props.theme.palette.warning.main};
    color: #fff;
  }
`;
