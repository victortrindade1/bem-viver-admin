import styled from "styled-components";
import media from "utils/media";

export const Container = styled.div<{ scrollTop?: number }>`
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
  z-index: 2;
  text-align: center;
  margin-top: 20px;

  @media (max-width: ${media.medium}) {
    font-size: 20px;
    left: 0;
    right: 0;

    animation: ${(props) =>
      props.scrollTop && props.scrollTop > 30
        ? "mobile-moving 0.3s ease-out forwards"
        : "mobile-moving-back 0.3s ease-out forwards"};
  }

  @media (min-width: ${media.mediumUp}) {
    font-size: 40px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 65vw;
    /* width: 100%; */
    position: fixed;

    animation: ${(props) =>
      props.scrollTop && props.scrollTop > 30
        ? "moving 0.3s ease-out forwards"
        : "moving-back 0.1s ease-out forwards"};
  }
`;
