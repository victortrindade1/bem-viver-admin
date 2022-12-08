import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";

import { Container } from "./styles";

const MuiTextInputForm: React.FC<ITextInputForm> = ({
  register,
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
  errors,
  disabled = false,
  ...rest
}) => {
  return (
    <Container width={width} minWidth={minWidth}>
      <FormControl error={Boolean(errors[name])} variant="standard" fullWidth>
        <Controller
          name={name}
          control={control}
          render={({ field: { value }, fieldState: { error }, formState }) => {
            return (
              <TextField
                {...register(name)}
                name={name}
                label={label}
                key={name}
                fullWidth
                variant="standard"
                value={value}
                margin="normal"
                required={isRequired}
                onBlurCapture={(event) =>
                  !errors[name] && onHandleSubmit && onHandleSubmit(event)
                }
                type={type}
                multiline={isMultiline}
                placeholder={placeholder}
                error={!!error}
                helperText={!!formState.errors?.message}
                disabled={disabled || formState.isSubmitting}
                {...rest}
              />
            );
          }}
        />
        {errors[name] && (
          <FormHelperText>{errors[name].message}</FormHelperText>
        )}
      </FormControl>
    </Container>
  );
};

export default MuiTextInputForm;
