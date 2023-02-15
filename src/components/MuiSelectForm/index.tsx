import React, { useState, useEffect } from "react";
import {
  FormHelperText,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

import { Container } from "./styles";

const MuiSelectForm: React.FC<IMuiSelectForm> = ({
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
  options,
  errors,
  disabled = false,
  ...rest
}) => {
  const [valueSelected, setValueSelected] = useState("");

  // Trigger Enter
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (inputName !== event.target) return;

      // if (event.key === "Enter" || event.key === "Tab") {
      if (event.key === "Enter") {
        if (event.target) {
          event.preventDefault();
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

  return (
    <Container width={width} minWidth={minWidth}>
      <FormControl
        error={Boolean(errors[name])}
        variant="standard"
        fullWidth
        margin="normal"
      >
        <Controller
          name={name}
          control={control}
          defaultValue={""}
          render={({
            field: { ref, onBlur, onChange },
            fieldState: { error },
            formState,
          }) => {
            return (
              <>
                <InputLabel id="inputId">{label}</InputLabel>
                <Select
                  labelId="inputId"
                  {...register(name)}
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                  id={name}
                  name={name}
                  label={label}
                  key={name}
                  fullWidth
                  value={valueSelected}
                  required={isRequired}
                  type={type}
                  multiline={isMultiline}
                  placeholder={placeholder}
                  error={!!error}
                  disabled={disabled || formState.isSubmitting}
                  {...rest}
                >
                  {options.map((item: any) => (
                    <MenuItem
                      key={item.id}
                      value={item || ""}
                      onClick={() => {
                        setValueSelected(item);
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </>
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

export default MuiSelectForm;
