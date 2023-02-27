import React from "react";
import Modal from "@mui/material/Modal";

import Button from "components/Button";

import {
  Container,
  Header,
  IconContainer,
  Title,
  Body,
  ButtonContainer,
} from "./styles";

interface IMuiModal {
  title?: string;
  children: any;
  open: boolean;
  handleClose: () => void;
  onSubmit?: any;
  icon: any;
}

const MuiModal: React.FC<IMuiModal> = ({
  title,
  children,
  open,
  handleClose,
  onSubmit,
  icon,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Container>
        <Header>
          <IconContainer>{icon}</IconContainer>
          <Title>{title}</Title>
        </Header>
        <Body>{children}</Body>
        {onSubmit && (
          <ButtonContainer>
            <Button label="ENVIAR" type="submit" onClick={onSubmit} />
          </ButtonContainer>
        )}
      </Container>
    </Modal>
  );
};

export default MuiModal;
