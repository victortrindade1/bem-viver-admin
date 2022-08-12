import { IconButton } from "@mui/material";
import { lighten, darken } from "polished";
import styled from "styled-components";

interface IsActive {
  isActive: boolean;
}

interface Icolor extends IsActive {
  color: string;
}

export const Container = styled.div`
  background-color: #fff;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;

  div:last-of-type {
    margin-left: auto;
  }
  /* zIndex: theme.zIndex.drawer + 1, */
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
`;

export const MenuBtnContainer = styled.div`
  height: 72px;
  width: 72px;

  background-color: ${(props) => props.theme.logo.verdeClaro};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconButtonStyled = styled(IconButton)`
  width: 60px;
  height: 60px;
`;

export const LogoContainer = styled.div`
  width: 139px;
  padding-left: 15px;
  top: 6px;
  position: relative;
`;

export const LoginContainer = styled.div`
  padding: 15px;
  color: ${(props) => props.theme.logo.rosa};

  svg {
    margin-left: 5px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 72px;
  font-family: "Fredoka";
  /* font-weight: bold; */
  width: 72px;
`;

export const LinkContainer = styled.div<Icolor>`
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  color: ${(props) =>
    props.isActive ? props.color : props.theme.palette.primary.main};
  background: ${(props) =>
    props.isActive ? lighten(0.3, props.color) : "#fff"};

  :hover {
    color: ${(props) => props.color};
  }
`;

export const Border = styled.div`
  width: 3px;
  height: 72px;
  background-color: ${(props) => props.color};
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const MenuIconContainer = styled.div``;

export const MenuLabelContainer = styled.div<Icolor>`
  font-size: 11px;
  color: ${(props) =>
    props.isActive
      ? darken(0.3, props.color)
      : props.theme.palette.primary.main};
`;
