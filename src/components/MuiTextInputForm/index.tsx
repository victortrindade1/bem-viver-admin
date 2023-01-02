import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

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
  const { ref } = register;
  // const { setFocus } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Trigger Enter
  useEffect(() => {
    const keyDownHandler = async (event: any) => {
      if (inputName !== event.target) return;

      if (event.key === "Enter") {
        if (event.target) {
          console.log("on enter");
          !errors[name] && onEnter && onEnter(event);
          // nextFocus && setFocus(nextFocus);
        } else {
          !errors[name] && onEnter();
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
                onBlurCapture={(event: any) => {
                  return !errors[name] && onBlur && onBlur(event);
                }}
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
