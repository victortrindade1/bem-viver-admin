import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaEllipsisV, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { IBodyMenu } from "types/layout";

import {
  Container,
  MoreButtonContainer,
  NavLinkStyled,
  LabelContainer,
  TrashContainer,
} from "./styles";

const BodyMenu: React.FC<IBodyMenu> = ({ links, actionDelete }: IBodyMenu) => {
  const navigate = useNavigate();

  const breakpoint = useMediaQuery("(max-width:768px)");

  const handleCLick = (url: string) => {
    navigate(url);
  };

  return (
    <>
      {breakpoint ? (
        <MoreButtonContainer>
          <FaEllipsisV />
        </MoreButtonContainer>
      ) : (
        <Container>
          {links &&
            links.map(
              ({ Icon, label, url, disabled }) =>
                !disabled && (
                  <NavLinkStyled
                    to={url}
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                    onClick={() => handleCLick(url)}
                    key={label}
                  >
                    <Icon size={25} />
                    <LabelContainer>{label}</LabelContainer>
                  </NavLinkStyled>
                )
            )}
          {actionDelete && (
            <TrashContainer>
              <FaTrashAlt onClick={actionDelete} size={25} />
            </TrashContainer>
          )}
        </Container>
      )}
    </>
  );
};

export default BodyMenu;
