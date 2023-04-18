import styled from "styled-components";

interface IActionContainer {
  actionIconColor?: string;
}
export const ActionContainer = styled.div<IActionContainer>`
  svg {
    color: ${(props) => {
      console.log(props);
      return props.actionIconColor
        ? props.actionIconColor
        : props.theme.palette.primary.main;
    }};
  }
`;
