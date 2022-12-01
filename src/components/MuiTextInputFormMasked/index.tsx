import React from "react";
import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";

import { Container } from "./styles";

const TextInputFormMasked: React.FC<IMaskTextInputForm> = ({
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
  mask,
  errors,
  disabled = false,
}) => {
  return (
    <Container width={width} minWidth={minWidth}>
      <FormControl error={Boolean(errors[name])} variant="standard" fullWidth>
        <Controller
          name={name}
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
            formState,
          }) => {
            return (
              <InputMask
                {...register(name)}
                mask={mask}
                maskPlaceholder={null}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled || formState.isSubmitting}
              >
                <TextField
                  name={name}
                  label={label}
                  fullWidth
                  variant="standard"
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
                />
              </InputMask>
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

export default TextInputFormMasked;
