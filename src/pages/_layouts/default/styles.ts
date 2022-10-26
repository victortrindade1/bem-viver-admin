import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  background: ${(props) => props.theme.palette.secondary.main};
`;

export const BodyChildren = styled.div`
  padding-top: 72px;

  h1 {
    color: ${(props) => props.theme.palette.primary.dark};
  }
`;
