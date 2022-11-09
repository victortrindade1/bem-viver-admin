import styled from "styled-components";
import media from "styled-media-query";
import { lighten } from "polished";

export const Container = styled.div`
  font-family: "Fredoka";
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: 20px;

  ${media.lessThan("small")`
    font-size: 16px;
  `}
`;

export const HiddenTitle = styled.div<{
  scrollTop: number;
  initialScroll: any;
  finalScroll: number;
}>`
  z-index: 1;
  font-size: 14px;
  position: absolute;
  background-color: ${(props) =>
    lighten(0.15, props.theme.palette.primary.main)};
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 0 10px 10px 0;
  font-family: "Fredoka";

  @keyframes movingBody {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(160px);
    }
  }

  @keyframes movingBody-back {
    from {
      transform: translateX(160px);
    }
    to {
      transform: translateX(0px);
    }
  }

  @keyframes medium-movingBody {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(160px);
    }
  }

  @keyframes medium-movingBody-back {
    from {
      transform: translateX(160px);
    }
    to {
      transform: translateX(0px);
    }
  }

  @keyframes mobile-movingBody {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(30px);
    }
  }

  @keyframes mobile-movingBody-back {
    from {
      transform: translateY(30px);
    }
    to {
      transform: translateY(0px);
    }
  }

  ${({ scrollTop, finalScroll, initialScroll }) => media.lessThan("small")`
    padding: 2px 10px;
    border-radius: 0px 0px 4px 4px;
    width: fit-content;
    margin-right: 55px;
    top: -30px;
    right: -20px;

    animation: ${
      scrollTop > initialScroll && scrollTop < finalScroll
        ? "mobile-movingBody 0.3s ease-out forwards"
        : "mobile-movingBody-back 0.3s ease-out forwards"
    };
  `};

  ${media.greaterThan("small")`
    padding: 1px 10px 1px 20px;
    left: -160px;
    top: 0px;
  `}

  ${({ scrollTop, initialScroll, finalScroll }) => media.between(
    "small",
    "medium"
  )`
    animation: ${
      scrollTop > initialScroll && scrollTop < finalScroll
        ? "medium-movingBody 0.3s ease-out forwards"
        : "medium-movingBody-back 0.3s ease-out forwards"
    };
  `};

  ${({ scrollTop, initialScroll, finalScroll }) => media.greaterThan("medium")`
    animation: ${
      scrollTop > initialScroll && scrollTop < finalScroll
        ? "movingBody 0.3s ease-out forwards"
        : "movingBody-back 0.3s ease-out forwards"
    };
  `};
`;
