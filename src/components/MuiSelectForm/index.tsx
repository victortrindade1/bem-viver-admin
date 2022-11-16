import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface IMuiSelectForm {
  initialValue: string;
  name: string;
  label: string;
  options: any;
  onSubmit(event: any): Promise<void>;
  width?: string;
}

interface ISelectItem {
  id: string;
  value: string;
}

const MuiSelectForm: React.FC<IMuiSelectForm> = ({
  initialValue,
  name,
  label,
  options,
  onSubmit,
  width = "167px",
}) => {
  const [valueSelected, setValueSelected] = useState(initialValue);

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: width }} margin="normal">
        <InputLabel id="inputId">{label}</InputLabel>
        <Select
          labelId="inputId"
          value={valueSelected}
          onChange={onSubmit}
          label={label}
          name={name}
        >
          {options.map((item: ISelectItem) => (
            <MenuItem
              key={item.id}
              value={item.value}
              onClick={(event: any) => setValueSelected(event.target.innerText)}
            >
              {item.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MuiSelectForm;
