import React, { useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import {
  formataCep,
  formataCNPJ,
  formataCPF,
  formataDate,
  formataTelefone,
} from "utils/regex";

import { Container } from "./styles";

const TextForm: React.FC<ITextForm> = ({
  maskType,
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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Aplica máscara
  const handleOnChange = useCallback(
    (e: any) => {
      e.preventDefault();

      const typeOfMask = maskType;
      switch (typeOfMask) {
        case "date":
          return formataDate(e.target.value);
        case "cpf":
          return formataCPF(e.target.value);
        case "cnpj":
          return formataCNPJ(e.target.value);
        case "tel":
          return formataTelefone(e.target.value);
        case "cep":
          return formataCep(e.target.value);
        default:
          return;
      }
    },
    [maskType]
  );

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
          defaultValue={""}
          render={({
            field: { value, ref, onBlur, onChange },
            fieldState: { error },
            formState,
          }) => {
            return (
              <TextField
                {...register(name)}
                onBlur={onBlur}
                onChange={(e: any) =>
                  maskType ? onChange(handleOnChange(e)) : onChange(e)
                }
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
