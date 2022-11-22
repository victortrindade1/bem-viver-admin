import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Container } from "./styles";

interface IMuiSwitchForm {
  label: string;
  name: string;
}

const MuiSwitchForm: React.FC<IMuiSwitchForm> = ({ label, name }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={label}
        name={name}
      />
    </Container>
  );
};

export default MuiSwitchForm;
