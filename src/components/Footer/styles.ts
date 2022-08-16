import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme.logo.rosa};
  position: fixed;
  bottom: 0;
`;
