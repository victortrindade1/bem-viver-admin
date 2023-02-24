import React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Container } from "./styles";
import { Controller } from "react-hook-form";

const SwitchForm: React.FC<ISwitchForm> = ({
  label,
  name,
  control,
  onChange: customOnChange,
}) => {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        defaultValue={false}
        render={({ field: { value: valueProp, onChange } }) => {
          return (
            <FormControlLabel
              control={
                <Switch
                  value={valueProp}
                  checked={valueProp}
                  onChange={(e: any) => {
                    customOnChange(e);
                    onChange(e);
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label={label}
              name={name}
            />
          );
        }}
      ></Controller>
    </Container>
  );
};

export default SwitchForm;
