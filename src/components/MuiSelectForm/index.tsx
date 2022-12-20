import React, { useState } from "react";
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
  name,
  label,
  onBlur,
  isRequired = false,
  // initialValue,
  width = "167px",
  minWidth = "80px",
  control,
  options,
  errors,
  ...rest
}) => {
  const [valueSelected, setValueSelected] = useState(null);

  return (
    <Container width={width} minWidth={minWidth}>
      <FormControl
        error={Boolean(errors[name])}
        variant="standard"
        margin="normal"
      >
        <Controller
          name={name}
          // rules={{
          //   required: isRequired,
          // }}
          control={control}
          render={(props) => {
            // console.log(props);
            return (
              <>
                <InputLabel id="inputId">{label}</InputLabel>
                <Select
                  fullWidth
                  labelId="inputId"
                  value={!valueSelected ? props.field.value : valueSelected}
                  onChange={onBlur}
                  label={label}
                  name={props.field.name}
                  required={isRequired}
                  {...rest}
                >
                  {options.map((item: ISelectItem) => (
                    <MenuItem
                      key={item.id}
                      value={item.value}
                      onClick={(event: any) =>
                        setValueSelected(event.target.innerText)
                      }
                    >
                      {item.value}
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
