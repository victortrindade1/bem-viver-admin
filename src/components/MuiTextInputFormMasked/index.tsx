import React, { useEffect } from "react";
import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";

import { Container } from "./styles";

const TextInputFormMasked: React.FC<IMaskTextInputForm> = ({
  mask,
  register,
  name,
  label,
  // onBlurProp,
  onEnter,
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
  const { ref } = register;

  // Trigger Enter or Tab
  useEffect(() => {
    const keyDownHandler = async (event: any) => {
      if (inputName !== event.target) return;

      if (event.key === "Enter" || event.key === "Tab") {
        if (event.target) {
          onEnter && onEnter(event);
        } else {
          onEnter();
        }
      }
    };

    const inputName = document.getElementById(name);

    inputName && inputName.addEventListener("keydown", keyDownHandler, false);
    return () => {
      inputName && inputName.removeEventListener("keydown", keyDownHandler);
    };
  }, [onEnter, errors, name]);

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
                  inputRef={ref}
                  id={name}
                  name={name}
                  label={label}
                  key={name}
                  fullWidth
                  variant="standard"
                  margin="normal"
                  required={isRequired}
                  // onBlurCapture={(event) =>
                  //   !errors[name] && onBlurProp && onBlurProp(event)
                  // }
                  type={type}
                  multiline={isMultiline}
                  placeholder={placeholder}
                  error={!!error}
                  helperText={!!formState.errors?.message}
                  {...rest}
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
