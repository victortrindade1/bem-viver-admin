import React, { useEffect } from "react";
import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import { Container } from "./styles";

const TextForm: React.FC<IMaskTextInputForm> = ({
  mask,
  register,
  name,
  label,
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

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
            if (mask) {
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
                    type={type}
                    multiline={isMultiline}
                    placeholder={placeholder}
                    error={!!error}
                    helperText={!!formState.errors?.message}
                    {...rest}
                  />
                </InputMask>
              );
            } else {
              return (
                <TextField
                  {...register(name)}
                  inputRef={ref}
                  id={name}
                  name={name}
                  label={label}
                  key={name}
                  fullWidth
                  variant="standard"
                  value={value}
                  margin="normal"
                  required={isRequired}
                  type={showPassword ? "text" : type}
                  multiline={isMultiline}
                  placeholder={placeholder}
                  error={!!error}
                  helperText={!!formState.errors?.message}
                  disabled={disabled || formState.isSubmitting}
                  InputProps={{
                    endAdornment: type === "password" && (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...rest}
                />
              );
            }
          }}
        />

        {errors[name] && (
          <FormHelperText>{errors[name].message}</FormHelperText>
        )}
      </FormControl>
    </Container>
  );
};

export default TextForm;
