import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div<{
  scrollTop?: number;
  initialScroll: number;
  finalScroll?: number;
}>`
  @keyframes changeTitle {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes movingBody {
    from {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    to {
      font-size: 14px;
      position: fixed;
      top: 100px;
      left: 220px;
      opacity: 1;
    }
  }

  @keyframes movingBody-back {
    from {
      font-size: 14px;
      position: fixed;
      top: 100px;
      left: 220px;
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    to {
      font-size: 20px;
      opacity: 1;
    }
  }

  @keyframes medium-movingBody {
    from {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    to {
      font-size: 14px;
      position: fixed;
      top: 100px;
      left: 170px;
      opacity: 1;
    }
  }

  @keyframes medium-movingBody-back {
    from {
      font-size: 14px;
      position: fixed;
      top: 100px;
      left: 170px;
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    to {
      font-size: 20px;
      opacity: 1;
    }
  }

  @keyframes mobile-movingBody {
    from {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    to {
      font-size: 14px;
      position: fixed;
      top: 150px;
      left: 0px;
      right: 0px;
      text-align: center;
      opacity: 1;
    }
  }

  @keyframes mobile-movingBody-back {
    from {
      font-size: 14px;
      position: fixed;
      top: 150px;
      left: 0px;
      right: 0px;
      text-align: center;
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    to {
      font-size: 16px;
      opacity: 1;
    }
  }

  font-family: "Fredoka";
  color: ${(props) => props.theme.palette.primary.dark};
  padding-bottom: 30px;
  z-index: 2;

  ${({ scrollTop, finalScroll, initialScroll }) => media.lessThan("small")`
    font-size: 16px;

    animation: ${
      scrollTop &&
      finalScroll &&
      scrollTop > initialScroll &&
      scrollTop < finalScroll
        ? "mobile-movingBody 0.3s ease-out forwards"
        : scrollTop && finalScroll && scrollTop > finalScroll
        ? "changeTitle 0.3s ease-out forwards"
        : scrollTop && scrollTop > initialScroll
        ? "mobile-movingBody 0.3s ease-out forwards"
        : "mobile-movingBody-back 0.3s ease-out forwards"
    };
  `};

  ${({ scrollTop, initialScroll, finalScroll }) => media.between(
    "small",
    "medium"
  )`
    font-size: 14px;

    animation: ${
      scrollTop &&
      finalScroll &&
      scrollTop > initialScroll &&
      scrollTop < finalScroll
        ? "medium-movingBody 0.3s ease-out forwards"
        : scrollTop && finalScroll && scrollTop > finalScroll
        ? "changeTitle 0.3s ease-out forwards"
        : scrollTop && scrollTop > initialScroll
        ? "medium-movingBody 0.3s ease-out forwards"
        : "medium-movingBody-back 0.3s ease-out forwards"
    };
  `};

  ${({ scrollTop, initialScroll, finalScroll }) => media.greaterThan("medium")`
    font-size: 14px;

    animation: ${
      scrollTop &&
      finalScroll &&
      scrollTop > initialScroll &&
      scrollTop < finalScroll
        ? "movingBody 0.3s ease-out forwards"
        : scrollTop && finalScroll && scrollTop > finalScroll
        ? "changeTitle 0.3s ease-out forwards"
        : scrollTop && scrollTop > initialScroll
        ? "movingBody 0.3s ease-out forwards"
        : "movingBody-back 0.3s ease-out forwards"
    };
  `};
`;
