import styled from "styled-components";
import { lighten } from "polished";

interface IContainer {
  color: string;
}
export const Container = styled.div<IContainer>`
  border: solid ${(props) => props.color} 1px;
  border-radius: 15px;
  padding: 1px 5px;
  background-color: ${(props) => lighten(0.3, props.color)};
  font-size: 10px;
  font-weight: bold;
  width: fit-content;
`;
