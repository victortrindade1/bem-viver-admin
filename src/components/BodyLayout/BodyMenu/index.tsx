import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaEllipsisV } from "react-icons/fa";

import {
  Container,
  MoreButtonContainer,
  ButtonContainer,
  LabelContainer,
} from "./styles";

const BodyMenu: React.FC<IBodyMenu> = ({
  links,
  backgroundColor,
}: IBodyMenu) => {
  const breakpoint = useMediaQuery("(max-width:600px)");

  return (
    <>
      {breakpoint ? (
        <MoreButtonContainer>
          <FaEllipsisV />
        </MoreButtonContainer>
      ) : (
        <Container>
          {links &&
            links.map(({ Icon, label }) => (
              <ButtonContainer backgroundColor={backgroundColor}>
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
