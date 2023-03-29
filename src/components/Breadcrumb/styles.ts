import styled from "styled-components";
import media from "utils/media";

export const Container = styled.div`
  position: fixed;
  /* right: 30px; */
  height: 19.5px;
  display: flex;
  align-items: center;

  a {
    display: flex;
    color: ${(props) => props.theme.palette.primary.main};
  }

  li {
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 15px;
    /* font-weight: bold; */
  }

  @media (max-width: ${media.medium}) {
    top: 90px;
    left: 40px;

    li {
      color: #fff;
    }
    a {
      color: #fff;
    }
  }
  @media (min-width: ${media.mediumUp}) {
    top: 78px;
    left: 215px;
  }
`;
