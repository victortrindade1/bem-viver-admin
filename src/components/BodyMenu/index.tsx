import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { IBodyMenu } from "types/layout";

import {
  Container,
  MoreButtonContainer,
  ButtonContainer,
  LabelContainer,
} from "./styles";

const BodyMenu: React.FC<IBodyMenu> = ({ links }: IBodyMenu) => {
  const navigate = useNavigate();

  const breakpoint = useMediaQuery("(max-width:450px)");

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
            links.map(({ Icon, label, url }) => (
              <ButtonContainer onClick={() => handleCLick(url)}>
                <Icon size={25} />
                <LabelContainer>{label}</LabelContainer>
              </ButtonContainer>
            ))}
        </Container>
      )}
    </>
  );
};

export default BodyMenu;
