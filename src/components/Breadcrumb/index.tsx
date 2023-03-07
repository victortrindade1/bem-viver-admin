import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

import { Container } from "./styles";

interface IBreadcrumb {
  links?: {
    url: string;
    label: string;
  }[];
}
const Breadcrumb: React.FC<IBreadcrumb> = ({ links }) => {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink to={"/"} key={"home"}>
          <HomeIcon fontSize="inherit" />
        </NavLink>
        {links &&
          links.map((item) => {
            return (
              <NavLink to={item.url} key={item.url}>
                {item.label}
              </NavLink>
            );
          })}
      </Breadcrumbs>
    </Container>
  );
};

export default Breadcrumb;
