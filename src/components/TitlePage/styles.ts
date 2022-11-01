import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div<{ scrollTop?: number; scrolled?: boolean }>`
  /* @-webkit-keyframes  */
  @keyframes moving {
    from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(0px, -42px);
      font-size: 20px;
    }
  }

  @keyframes moving-back {
    from {
      transform: translate(0px, -42px);
      font-size: 20px;
    }
    to {
      transform: translate(0px, 0px);
      font-size: 40px;
    }
  }

  @keyframes mobile-moving {
    from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(0px, -52px);
      color: #fff;
    }
  }

  @keyframes mobile-moving-back {
    from {
      transform: translate(0px, -52px);
      color: #fff;
    }
    to {
      transform: translate(0px, 0px);
      color: ${({ theme }) => theme.palette.primary.dark};
    }
  }

  font-family: "Fredoka";
  color: ${(props) => props.theme.palette.primary.dark};
  font-weight: 600;
  position: fixed;

  ${({ scrollTop }) => media.lessThan("small")`
    font-size: 20px;
    text-align: center;
    padding: 22px;
    width: 90%;

    animation: ${
      scrollTop && scrollTop > 30
        ? "mobile-moving 0.3s ease-out forwards"
        : "mobile-moving-back 0.3s ease-out forwards"
    };
  `};
  ${({ scrollTop }) => media.greaterThan("small")`
    width: calc(100% - 188px);
    padding: 20px;
    font-size: 40px;

    animation: ${
      scrollTop && scrollTop > 30
        ? "moving 0.3s ease-out forwards"
        : "moving-back 0.1s ease-out forwards"
    };
  }};
  `};
  ${media.greaterThan("medium")`
    width: calc(100% - 232px);
  `};
`;
