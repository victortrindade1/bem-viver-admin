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
  minWidth = "80px",
  isMultiline = false,
  placeholder,
  // control,
}) => {
  return (
    <Container width={width} minWidth={minWidth}>
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
        // control={control}
        placeholder={placeholder}
        // sx={{ marginTop: "0px" }}
      />
    </Container>
  );
};

export default TextInputForm;
