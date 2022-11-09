import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
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

export const Scrollable = styled.div`
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  ${media.lessThan("small")`
    justify-content: center;
  `};
`;

export const BodyLayout = styled.div`
  display: flex;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 5px 5px 20px 0px #00000040;
  padding: 0px 20px;
  position: relative;

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

export const Body = styled.div`
  width: 100%;

  ${media.lessThan("small")`
    margin: 60px 0px;
  `};

  ${media.greaterThan("small")`
    margin-top: 108px;
  `};
`;
