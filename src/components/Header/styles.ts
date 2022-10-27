import { IconButton } from "@mui/material";
import { lighten } from "polished";
import styled from "styled-components";

interface IsActive {
  isActive: boolean;
}

export const Container = styled.div`
  background-color: #fff;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: -5px 5px 20px 0px #00000040;

  div:last-of-type {
    margin-left: auto;
  }
  /* zIndex: theme.zIndex.drawer + 1, */
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
`;

export const MenuBtnContainer = styled.div`
  height: 72px;
  width: 72px;

  background-color: ${(props) => props.theme.palette.primary.main};

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
  color: ${(props) => props.theme.palette.primary.main};

  svg {
    margin-left: 5px;
  }

  :hover {
    cursor: pointer;
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

export const LinkContainer = styled.div<IsActive>`
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  color: ${(props) =>
    props.isActive
      ? props.theme.palette.primary.main
      : props.theme.palette.primary.dark};
  background: ${(props) =>
    props.isActive ? lighten(0.25, props.theme.palette.primary.main) : "#fff"};

  :hover {
    span {
      color: ${(props) => props.theme.palette.primary.main};
    }
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const Border = styled.div<IsActive>`
  width: 3px;
  height: 72px;
  background-color: ${(props) =>
    props.isActive ? props.theme.palette.primary.main : "none"};
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const MenuIconContainer = styled.div``;

export const MenuLabelContainer = styled.div<IsActive>`
  font-size: 11px;
  color: ${(props) =>
    props.isActive
      ? props.theme.palette.primary.main
      : props.theme.palette.primary.dark};
`;
