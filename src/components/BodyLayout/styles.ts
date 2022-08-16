import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
`;

export const BodyContainer = styled.div<IColor>`
  width: 100%;
  height: calc(100vh - 215px);
  background-color: ${(props) =>
    props.backgroundColor
      ? lighten(0.35, props.backgroundColor)
      : "transparent"};
  margin: 0 15px;
  /* -webkit-box-shadow: 0px 8px 13px -10px #000000;
  box-shadow: 0px 8px 13px -10px #000000; */
  border-radius: 4px;
`;
