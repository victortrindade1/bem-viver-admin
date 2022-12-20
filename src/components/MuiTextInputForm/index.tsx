import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";

import { Container } from "./styles";

const MuiTextInputForm: React.FC<ITextInputForm> = ({
  register,
  name,
  label,
  onBlur,
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
  // const { setFocus } = useForm();

  // Trigger Enter
  useEffect(() => {
    const keyDownHandler = async (event: any) => {
      if (inputName !== event.target) return;

      if (event.key === "Enter") {
        if (event.target) {
          !errors[name] && onEnter && (await onEnter(event));
          // nextFocus && setFocus(nextFocus);
        } else {
          !errors[name] && (await onEnter());
          // nextFocus && setFocus(nextFocus);
        }
      }
    };

    const inputName = document.getElementById(name);

    inputName && inputName.addEventListener("keydown", keyDownHandler, false);
    return () => {
      inputName && inputName.removeEventListener("keydown", keyDownHandler);
    };
  }, [onEnter, errors, name]);

  // const handleEnter = async ({ onSubmit, focusNext }: any) => {
  //   onSubmit && (await onSubmit());
  //   focusNext && setFocus(focusNext);
  // };

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
                id={name}
                name={name}
                label={label}
                key={name}
                fullWidth
                variant="standard"
                value={value}
                margin="normal"
                required={isRequired}
                onBlurCapture={(event: any) => {
                  return !errors[name] && onBlur && onBlur(event);
                }}
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
