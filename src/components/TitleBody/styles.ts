import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  font-family: "Fredoka";
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: 20px;
  padding-bottom: 30px;

  ${media.lessThan(`small`)`
    font-size: 16px;
  `};

  ${media.greaterThan(`small`)`
    /* padding-left: 20px; */
  `};
`;
