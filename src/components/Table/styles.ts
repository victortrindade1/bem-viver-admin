import styled from "styled-components";

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
