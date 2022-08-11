import { IconButton } from "@mui/material";
import styled from "styled-components";

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
  width: 72px;
`;

export const LinkContainer = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuIconContainer = styled.div``;

export const MenuLabelContainer = styled.div`
  font-size: 11px;
`;
