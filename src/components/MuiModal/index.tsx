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
  labelButton?: string;
}

/**
 * Se quiser 2 ou mais modais no mesmo local, basta mais setOpen e handleClose e
 * no render isola numa condicional.
 * Ex:
 * const [openModal1, setOpenModal1] = useState(false);
 * const [openModal2, setOpenModal2] = useState(false);
 *
 * const Component = () => {
 *    return (
 *      <>
 *        {openModal1 &&
 *          <MuiModal props={props1}>{children1}</MuiModal>
 *        }
 *        {openModal2 &&
 *          <MuiModal props={props2}>{children2}</MuiModal>
 *        }
 *      </>
 *    )
 * }
 *
 */
const MuiModal: React.FC<IMuiModal> = ({
  title,
  children,
  open,
  handleClose,
  onSubmit,
  icon,
  labelButton = "ENVIAR",
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
            <Button label={labelButton} type="submit" onClick={onSubmit} />
          </ButtonContainer>
        )}
      </Container>
    </Modal>
  );
};

export default MuiModal;
