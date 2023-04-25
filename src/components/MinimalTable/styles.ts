import styled from "styled-components";

interface IActionContainer {
  actionIconColor?: string;
}
export const ActionContainer = styled.div<IActionContainer>`
  /* display: flex;
  justify-content: center; */
  padding-left: 15px;

  svg {
    color: ${(props) => {
      return props.actionIconColor
        ? props.actionIconColor
        : props.theme.palette.primary.main;
    }};
  }
`;
