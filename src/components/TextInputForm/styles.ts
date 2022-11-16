import styled from "styled-components";

export const Container = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;
