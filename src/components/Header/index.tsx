import React from "react";
import { FaBars } from "react-icons/fa";
import { IconButton } from "@mui/material";

import {
  Container,
  MenuBtnContainer,
  LogoContainer,
  LoginContainer,
} from "./styles";

import theme from "styles/theme";

const Header: React.FC = () => {
  return (
    <Container>
      <MenuBtnContainer>
        <IconButton aria-label="menu">
          <FaBars color={theme.bg.light} />
        </IconButton>
      </MenuBtnContainer>
      <LogoContainer />
      <LoginContainer />
    </Container>
  );
};

export default Header;
