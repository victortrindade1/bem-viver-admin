import React from "react";
import Modal from "@mui/material/Modal";
import { FaKey } from "react-icons/fa";

import Button from "components/Button";

import {
  Container,
  Header,
  IconContainer,
  Title,
  Body,
  ButtonContainer,
} from "./styles";

import theme from "styles/theme";

interface IMuiModal {
  title?: string;
  children: any;
  open: boolean;
  handleClose: () => void;
}

const MuiModal: React.FC<IMuiModal> = ({
  title,
  children,
  open,
  handleClose,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Container>
        <Header>
          <IconContainer>
            <FaKey color={theme.palette.primary.main} />
          </IconContainer>
          <Title>{title}</Title>
        </Header>
        <Body>{children}</Body>
        <ButtonContainer>
          <Button label="ENVIAR" />
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default MuiModal;
