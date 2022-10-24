import styled from "styled-components";

export const Container = styled.div`
  padding: 38px;
  font-family: "Fredoka", sans-serif;
  color: ${(props) => props.theme.palette.primary.dark};
  font-weight: bold;
  h1 {
    font-size: 40px;
  }
`;
