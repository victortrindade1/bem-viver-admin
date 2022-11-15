import React from "react";
import { TextFieldElement } from "react-hook-form-mui";

// import { Container } from './styles';

const TextInputForm: React.FC<ITextInputForm> = ({
  name,
  label,
  onHandleSubmit,
  isRequired = false,
  isFullWidth = false,
  type,
}) => {
  return (
    <>
      <TextFieldElement
        fullWidth={isFullWidth}
        variant="standard"
        name={name}
        label={label}
        margin="normal"
        required={isRequired}
        onBlurCapture={(event) => onHandleSubmit(event)}
        type={type}
      />
      {!isFullWidth && <br />}
    </>
  );
};

export default TextInputForm;
