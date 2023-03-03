import styled from "styled-components";
import media from "utils/media";

export const Container = styled.div`
  background: rgb(101, 189, 127);
  display: flex;

  width: calc(100% - 200px);
  background: linear-gradient(
    270deg,
    rgba(101, 189, 127, 1) 0%,
    rgba(197, 250, 213, 1) 35%
  );

  @media (max-width: ${media.medium}) {
    width: 100%;
    height: calc(100% - 80px);
    background: linear-gradient(
      0deg,
      rgba(101, 189, 127, 1) 0%,
      rgba(197, 250, 213, 1) 35%
    );

    justify-content: center;
  }

  @media (min-width: ${media.mediumUp}) {
    align-items: center;
  }
`;

export const Scrollable = styled.div`
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: ${media.medium}) {
    justify-content: center;
  } ;
`;

export const BodyLayout = styled.div`
  display: flex;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 5px 5px 20px 0px #00000040;
  padding: 0px 20px;
  position: relative;
  width: 100%;
  border-radius: 0px 4px 4px 0px;

  @media (max-width: ${media.medium}) {
    border-radius: 0px 0px 4px 4px;
    width: 90%;
    margin-bottom: 30px;
  }

  @media (min-width: ${media.mediumUp}) {
    height: 90%;
    margin-right: 30px;
  } ;
`;

export const Body = styled.div`
  width: 100%;
  margin-top: 108px;

  @media (max-width: ${media.medium}) {
    margin: 60px 0px;
  } ;
`;
