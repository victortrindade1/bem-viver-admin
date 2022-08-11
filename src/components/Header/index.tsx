import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  FaUser,
  FaUsers,
  FaChalkboardTeacher,
  FaChalkboard,
  FaChartPie,
  FaFileInvoiceDollar,
  FaCog,
} from "react-icons/fa";
// import { IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";

import logo from "assets/svg/logo.svg";

import {
  Container,
  MenuBtnContainer,
  IconButtonStyled,
  LogoContainer,
  LoginContainer,
  MenuContainer,
  LinkContainer,
  MenuIconContainer,
  MenuLabelContainer,
} from "./styles";

import theme from "styles/theme";
import { IconType } from "react-icons/lib";

const links: { label: string; Icon: IconType; href: string }[] = [
  {
    label: "Alunos",
    href: "/alunos",
    Icon: FaUsers,
  },
  {
    label: "Professores",
    href: "/professores",
    Icon: FaChalkboardTeacher,
  },
  {
    label: "Turmas",
    href: "/turmas",
    Icon: FaChalkboard,
  },
  {
    label: "Financeiro",
    href: "/financeiro",
    Icon: FaChartPie,
  },
  {
    label: "Relatórios",
    href: "/relatorios",
    Icon: FaFileInvoiceDollar,
  },
  {
    label: "Configurações",
    href: "/configuracoes",
    Icon: FaCog,
  },
];

const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleDrawer =
    (isOpened?: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      console.tron.log(isOpened);
      setMenuOpened(isOpened ? isOpened : !menuOpened);
    };

  const handleCloseMenu = () => {
    if (menuOpened) {
      return toggleDrawer();
    }
    // return;
  };

  return (
    <>
      <Container onClick={handleCloseMenu()}>
        <MenuBtnContainer onClick={toggleDrawer()}>
          <IconButtonStyled aria-label="menu">
            <FaBars color={theme.bg.light} />
          </IconButtonStyled>
        </MenuBtnContainer>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>
        <LoginContainer>
          Admin
          <FaUser />
        </LoginContainer>
      </Container>
      <Drawer anchor={"left"} open={menuOpened} onClose={toggleDrawer(false)}>
        <MenuContainer onClick={toggleDrawer(false)}>
          {links.map(({ label, Icon, href }) => (
            <Link key={href} to={href}>
              <LinkContainer>
                <MenuIconContainer>
                  <Icon size={25} />
                </MenuIconContainer>
                <MenuLabelContainer>{label}</MenuLabelContainer>
              </LinkContainer>
            </Link>
          ))}
        </MenuContainer>
      </Drawer>
    </>
  );
};

export default Header;
