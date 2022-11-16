import React from "react";
import { TextFieldElement } from "react-hook-form-mui";

import { Container } from "./styles";

const TextInputForm: React.FC<ITextInputForm> = ({
  name,
  label,
  onHandleSubmit,
  isRequired = false,
  type,
  width = "167px",
  isMultiline = false,
}) => {
  return (
    <Container width={width}>
      <TextFieldElement
        fullWidth
        variant="standard"
        name={name}
        label={label}
        margin="normal"
        required={isRequired}
        onBlurCapture={(event) => onHandleSubmit(event)}
        type={type}
        multiline={isMultiline}
        // sx={{ marginTop: "0px" }}
      />
    </Container>
  );
};

export default TextInputForm;
