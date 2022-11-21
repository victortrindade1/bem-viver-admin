import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

import { Container } from "./styles";

const MuiTextInputForm: React.FC<ITextInputForm> = ({
  name,
  label,
  onHandleSubmit,
  isRequired = false,
  type,
  width = "167px",
  minWidth = "80px",
  isMultiline = false,
  placeholder,
  control,
  // errors,
  ...rest
}) => {
  return (
    <Container width={width} minWidth={minWidth}>
      <Controller
        name={name}
        control={control}
        render={(props) => {
          return (
            <TextField
              fullWidth
              variant="standard"
              name={name}
              value={props.field.value}
              label={label}
              margin="normal"
              required={isRequired}
              onBlurCapture={(event) => onHandleSubmit(event)}
              onChange={props.field.onChange}
              onBlur={props.field.onBlur}
              type={type}
              multiline={isMultiline}
              placeholder={placeholder}
              // disabled={false}
              {...rest}
            />
          );
        }}
      />
    </Container>
  );
};

export default MuiTextInputForm;
