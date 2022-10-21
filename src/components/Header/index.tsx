import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import {
  FaBars,
  FaUser,
  FaUsers,
  FaChalkboardTeacher,
  FaChalkboard,
  FaChartPie,
  FaFileInvoiceDollar,
  FaCog,
} from "react-icons/fa";

import Drawer from "@mui/material/Drawer";
import { NavLink } from "react-router-dom";

import logo from "assets/svg/logo.svg";

import AuthContext from "contexts/auth";

import {
  Container,
  MenuBtnContainer,
  IconButtonStyled,
  LogoContainer,
  LoginContainer,
  MenuContainer,
  LinkContainer,
  Border,
  MenuItemContainer,
  MenuIconContainer,
  MenuLabelContainer,
} from "./styles";

import theme from "styles/theme";
import { useContext } from "react";

const links: { label: string; Icon: IconType; href: string; color: string }[] =
  [
    {
      label: "Alunos",
      href: "/alunos",
      Icon: FaUsers,
      color: theme.logo.azul,
    },
    {
      label: "Professores",
      href: "/professores",
      Icon: FaChalkboardTeacher,
      color: theme.logo.amarelo,
    },
    {
      label: "Turmas",
      href: "/turmas",
      Icon: FaChalkboard,
      color: theme.logo.rosa,
    },
    {
      label: "Financeiro",
      href: "/financeiro",
      Icon: FaChartPie,
      color: theme.logo.verdeEscuro,
    },
    {
      label: "Relatórios",
      href: "/relatorios",
      Icon: FaFileInvoiceDollar,
      color: theme.logo.laranja,
    },
    {
      label: "Config.",
      href: "/configuracoes",
      Icon: FaCog,
      color: theme.logo.verdeClaro,
    },
  ];

const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const { signOut } = useContext(AuthContext);

  const toggleDrawer =
    (isOpened?: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setMenuOpened(isOpened ? isOpened : !menuOpened);
    };

  const handleCloseMenu = () => {
    if (menuOpened) {
      return toggleDrawer();
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <Container onClick={handleCloseMenu()}>
        <MenuBtnContainer onClick={toggleDrawer()}>
          <IconButtonStyled aria-label="menu">
            <FaBars color={theme.bg.light} />
          </IconButtonStyled>
        </MenuBtnContainer>
        <NavLink to="/dashboard">
          <LogoContainer>
            <img src={logo} alt="logo" />
          </LogoContainer>
        </NavLink>
        <LoginContainer onClick={handleSignOut}>
          Admin
          <FaUser />
        </LoginContainer>
      </Container>
      <Drawer anchor={"left"} open={menuOpened} onClose={toggleDrawer(false)}>
        <MenuContainer onClick={toggleDrawer(false)}>
          {links.map(({ label, Icon, href, color }) => (
            <NavLink
              key={href}
              to={href}
              children={({ isActive }) => (
                <LinkContainer color={color} isActive={isActive}>
                  <Border color={color} />
                  <MenuItemContainer>
                    <MenuIconContainer>
                      <Icon size={25} />
                    </MenuIconContainer>
                    <MenuLabelContainer isActive={isActive} color={color}>
                      {label}
                    </MenuLabelContainer>
                  </MenuItemContainer>
                </LinkContainer>
              )}
            />
          ))}
        </MenuContainer>
      </Drawer>
    </>
  );
};

export default Header;
