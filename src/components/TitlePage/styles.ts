import styled from "styled-components";
import media from "utils/media";

export const Container = styled.div<{
  scrollTop?: number;
  isInitialScroll?: boolean;
}>`
  /* @-webkit-keyframes  */
  @keyframes moving {
    from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(0px, -62px);
      font-size: 20px;
    }
  }

  @keyframes moving-back {
    from {
      transform: translate(0px, -62px);
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
      transform: translate(0px, -72px);
      color: #fff;
    }
  }

  @keyframes mobile-moving-back {
    from {
      transform: translate(0px, -72px);
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
  z-index: 2;
  margin-top: 20px;

  @media (max-width: ${media.medium}) {
    position: fixed;
    top: 100px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    left: 0;
    right: 0;

    /* animation: ${(props) =>
      props.scrollTop && props.scrollTop > 30
        ? "mobile-moving 0.3s ease-out forwards"
        : "mobile-moving-back 0.3s ease-out forwards"}; */
  }

  @media (min-width: ${media.mediumUp}) {
    font-size: 40px;

    text-overflow: ellipsis;
    white-space: nowrap;
    /* overflow: hidden; */
    max-width: 65vw;
    /* width: 100%; */
    /* position: fixed; */

    /* animation: ${(props) =>
      props.scrollTop && props.scrollTop > 30
        ? "moving 0.3s ease-out forwards"
        : props.isInitialScroll === false &&
          "moving-back 0.3s ease-out forwards"}; */
  }
`;
