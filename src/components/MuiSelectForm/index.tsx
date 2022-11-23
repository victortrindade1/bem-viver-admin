import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

import { Container } from "./styles";

const MuiSelectForm: React.FC<IMuiSelectForm> = ({
  name,
  label,
  onHandleSubmit,
  isRequired = false,
  // initialValue,
  width = "167px",
  minWidth = "80px",
  control,
  options,
  ...rest
}) => {
  const [valueSelected, setValueSelected] = useState(null);

  return (
    <Container width={width} minWidth={minWidth}>
      <FormControl variant="standard" margin="normal">
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
                  onChange={onHandleSubmit}
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
      </FormControl>
    </Container>
  );
};

export default MuiSelectForm;
