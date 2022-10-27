import styled from "styled-components";
import { ThemeProps } from "styled-components";
import media from "styled-media-query";

export const DarkSideContainer = styled.div`
  height: auto;
  display: flex;
  background-color: ${(props) => props.theme.palette.primary.main};
  ${media.lessThan("small")`
    width: 100%;
    height: 80px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  `};
  ${media.greaterThan("small")`
    align-items: center;
    justify-content: flex-end;
  `};
  ${media.between("small", "medium")`
    width: 150px;
  `};
  ${media.greaterThan("medium")`
    width: 200px;
  `};
`;

export const LightSideContainer = styled.div`
  background: rgb(101, 189, 127);
  display: flex;

  ${media.lessThan("small")`
    width: 100%;
    height: calc(100% - 80px);
    background: linear-gradient(0deg, rgba(101,189,127,1) 0%, rgba(197,250,213,1) 35%);

    justify-content: center;
  `};
  ${media.greaterThan("small")`
    background: linear-gradient(270deg, rgba(101,189,127,1) 0%, rgba(197,250,213,1) 35%);

    align-items: center;
  `};
  ${media.between("small", "medium")`
    width: calc(100% - 150px);
  `};
  ${media.greaterThan("medium")`
    width: calc(100% - 200px);
  `};
`;

export const BodyMenuContainer = styled.div`
  background-color: ${(props) => props.theme.palette.primary.main};
  box-shadow: -5px 5px 20px 0px #00000040;

  ${media.lessThan("small")`
    border-radius: 4px 4px 0px 0px;
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: center;
  `};
  ${media.greaterThan("small")`
    border-radius: 4px 0px 0px 4px;
    height: 90%;
  `};
  ${media.between("small", "medium")`
    width: 120px;
  `};
  ${media.greaterThan("medium")`
    width: 170px;
  `};
`;

export const BodyLayoutContainer = styled.div`
  overflow: auto;
  /* position: relative; */
  background-color: #fff;
  box-shadow: 5px 5px 20px 0px #00000040;

  ${media.lessThan("small")`
    border-radius: 0px 0px 4px 4px;
    width: 90%;
    margin-bottom: 30px;
  `};
  ${media.greaterThan("small")`
    border-radius: 0px 4px 4px 0px;
    height: 90%;
    width: 100%;
    margin-right: 30px;
  `};
`;

interface IScrollTop extends ThemeProps<any> {
  scrollTop: number;
}

export const Title = styled.div<IScrollTop>`
  font-family: "Fredoka";
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  font-size: ${(props) => {
    return props.scrollTop > 3 ? "20px" : "40px";
  }};
  position: fixed;
  transition: 0.2s;
  z-index: 1;
  background-color: #fff;

  ${({ scrollTop }) => media.lessThan("small")`
    font-size: 20px;
    text-align: center;
    padding: ${scrollTop > 3 ? "5px" : "22px"};
    width: 90%;
  `};
  ${media.greaterThan("small")`
    width: calc(100% - 188px);
    padding: 20px;
  `};
  ${media.greaterThan("medium")`
    width: calc(100% - 232px);
  `};
`;

export const FormContainerWrapper = styled.div`
  ${media.lessThan("small")`
    margin: 0 30px;
  `};

  ${media.greaterThan("small")`
    max-width: 300px;
    margin: 30px;
    margin-top: 100px;
  `};

  ${media.greaterThan("medium")`
    max-width: 300px;
  `};
`;
