import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div<{ scrollTop?: number }>`
  font-family: "Fredoka";
  color: ${(props) => props.theme.palette.primary.dark};
  font-weight: 600;
  position: fixed;
  transition: 0.5s;
  z-index: 1;

  ${({ scrollTop }) => media.lessThan("small")`
    font-size: 20px;
    text-align: center;
    padding: ${scrollTop && scrollTop > 30 ? "7px" : "22px"};
    width: 90%;
    position: ${scrollTop && scrollTop > 30 && "absolute"};
    top: ${scrollTop && scrollTop > 30 && 0};
    color: ${scrollTop && scrollTop > 30 && "#fff"};
  `};
  ${({ scrollTop }) => media.greaterThan("small")`
    width: calc(100% - 188px);
    padding: 20px;
    font-size: ${scrollTop && scrollTop > 30 ? "20px" : "40px"};
    position: ${scrollTop && scrollTop > 30 && "absolute"};
    top: ${scrollTop && scrollTop > 30 ? "-20px" : "100px"};
  }};
  `};
  ${media.greaterThan("medium")`
    width: calc(100% - 232px);
  `};
`;
