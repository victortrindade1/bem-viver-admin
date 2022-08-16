import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  align-items: center;
`;

export const MoreButtonContainer = styled.div`
  position: absolute;
  right: 27px;
  top: 16px;
`;

export const ButtonContainer = styled.div<IColor>`
  height: 80px;
  width: 80px;
  background-color: ${(props) =>
    props.backgroundColor
      ? lighten(0.35, props.backgroundColor)
      : "transparent"};
  margin-bottom: 19px;
  -webkit-box-shadow: 0px 8px 13px -10px #000000;
  box-shadow: 0px 8px 13px -10px #000000;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.palette.primary.main};

  svg {
    color: ${(props) => props.theme.palette.primary.main};
    margin-bottom: 3px;
  }

  font-family: "Fredoka";
  font-size: 11px;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }
`;

export const LabelContainer = styled.div``;
