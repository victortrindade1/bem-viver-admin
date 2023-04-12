import React from "react";

import { IButton } from "types/layout";

import { MuiButtonStyled } from "./styles";

const Button: React.FC<IButton> = ({ label, type, onClick, sx, ...rest }) => {
  return (
    <MuiButtonStyled
      variant="contained"
      type={type}
      onClick={onClick}
      sx={sx}
      {...rest}
    >
      {label}
    </MuiButtonStyled>
  );
};

export default Button;
