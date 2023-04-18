import React, { useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, FormControl, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Search from "@mui/icons-material/Search";
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
  // refAutocomplete,
  maskType,
  register,
  name,
  label,
  onEnter,
  isRequired = false,
  type,
  width = "167px",
  minWidth = "80px",
  maxWidth,
  isMultiline = false,
  placeholder,
  control,
  errors,
  disabled = false,
  variant = "standard",
  options,
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

  // Trigger Enter
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (inputName !== event.target) return;

      // if (event.key === "Enter" || event.key === "Tab") {
      if (event.key === "Enter") {
        if (event.target) {
          event.preventDefault();
          // console.log(event);
          // if (refAutocomplete) {
          //   event.target.value = refAutocomplete.current.state.focusedOption;
          // }
          // refAutocomplete && event.target.value = refAutocomplete.current.state.focusedOption;
          onEnter && onEnter(event);
        } else {
          onEnter && onEnter();
        }
      }
    };

    const inputName = document.getElementById(name);

    inputName && inputName.addEventListener("keydown", keyDownHandler, false);
    return () => {
      inputName && inputName.removeEventListener("keydown", keyDownHandler);
    };
  }, [onEnter, errors, name]);

  const TextFieldComponent = ({
    onBlur,
    onChange,
    ref,
    value,
    error,
    formState,
    params,
  }: any) => (
    <TextField
      {...register(name)}
      onBlur={onBlur}
      onChange={(e: any) =>
        maskType ? onChange(handleOnChange(e)) : onChange(e)
      }
      inputRef={ref}
      name={name}
      id={name}
      label={label}
      key={name}
      fullWidth
      variant={variant}
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
        endAdornment: (type === "password" || type === "search") && (
          <InputAdornment position="end">
            {type === "password" ? (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ) : (
              <IconButton aria-label="search input">
                <Search />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      {...rest}
      {...params}
    />
  );

  return (
    <Container width={width} minWidth={minWidth} maxWidth={maxWidth}>
      <FormControl error={Boolean(errors[name])} variant={variant} fullWidth>
        <Controller
          name={name}
          control={control}
          defaultValue={""}
          render={({
            field: { value, ref, onBlur, onChange },
            fieldState: { error },
            formState,
          }) => {
            return options ? (
              // Input com lista de opções (ComboBox)
              <Autocomplete
                id={name}
                // ref={refAutocomplete}
                autoHighlight
                autoComplete
                autoSelect
                options={options}
                disablePortal // Dropdown abaixo do input na msm div
                renderInput={(params) =>
                  TextFieldComponent({
                    params,
                    onBlur,
                    onChange,
                    ref,
                    value,
                    error,
                    formState,
                  })
                }
              />
            ) : (
              // Input comum
              TextFieldComponent({
                onBlur,
                onChange,
                ref,
                value,
                error,
                formState,
              })
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
