import styled from "styled-components";

export const Container = styled.div<{
  width: string;
  minWidth: string;
  maxWidth?: string;
}>`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
`;
