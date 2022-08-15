import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaEllipsisV } from "react-icons/fa";
import { Container, MoreButtonContainer } from "./styles";
import { Button } from "@mui/material";

const BodyMenu: React.FC<IBodyMenu> = ({ links }: IBodyMenu) => {
  const breakpoint = useMediaQuery("(max-width:600px)");

  return (
    <>
      {breakpoint ? (
        <MoreButtonContainer>
          <FaEllipsisV />
        </MoreButtonContainer>
      ) : (
        <Container>
          <Button>Botão 1</Button>
          <Button>Botão 2</Button>
        </Container>
      )}
    </>
  );
};

export default BodyMenu;
