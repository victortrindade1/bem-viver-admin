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
import { NavLink, useNavigate } from "react-router-dom";

import logo from "assets/svg/logo.svg";

import { useAuth } from "contexts/auth";

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
import { Menu, MenuItem } from "@mui/material";

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
    label: "Config.",
    href: "/configuracoes",
    Icon: FaCog,
  },
];

const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const { signOut } = useAuth();

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

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLoginMenu = () => {
    setAnchorEl(null);
  };

  const handleConta = () => {
    handleCloseLoginMenu();
    navigate("/conta");
  };

  const handleSair = () => {
    handleSignOut();
    handleCloseLoginMenu();
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
        <LoginContainer
          id="login-container"
          onClick={handleClick}
          aria-controls={open ? "login-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          Admin
          <FaUser />
        </LoginContainer>
      </Container>
      <Drawer anchor={"left"} open={menuOpened} onClose={toggleDrawer(false)}>
        <MenuContainer onClick={toggleDrawer(false)}>
          {links.map(({ label, Icon, href }) => (
            <NavLink
              key={href}
              to={href}
              children={({ isActive }) => (
                <LinkContainer isActive={isActive}>
                  <Border isActive={isActive} />
                  <MenuItemContainer>
                    <MenuIconContainer>
                      <Icon size={25} />
                    </MenuIconContainer>
                    <MenuLabelContainer isActive={isActive}>
                      <span>{label}</span>
                    </MenuLabelContainer>
                  </MenuItemContainer>
                </LinkContainer>
              )}
            />
          ))}
        </MenuContainer>
      </Drawer>
      <Menu
        id="login-menu"
        aria-labelledby="login-container"
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseLoginMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleConta}>Minha Conta</MenuItem>
        <MenuItem onClick={handleSair}>Sair</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
