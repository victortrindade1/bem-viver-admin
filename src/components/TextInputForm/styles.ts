import styled from "styled-components";

export const Container = styled.div<{ width: string; minWidth: string }>`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
`;
