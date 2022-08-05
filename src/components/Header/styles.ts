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
`;

export const MenuBtnContainer = styled.div`
  height: 72px;
  width: 72px;

  background-color: ${(props) => props.theme.logo.verdeClaro};

  display: flex;
  justify-content: center;
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
