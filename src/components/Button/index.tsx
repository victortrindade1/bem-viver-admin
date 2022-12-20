import React from "react";

import { IButton } from "types/layout";

import { MuiButtonStyled } from "./styles";

const Button: React.FC<IButton> = ({
  label,
  type,
  width = "100%",
  margin = "16px 0px 8px 0px",
  handleClick,
  ...rest
}) => {
  return (
    <MuiButtonStyled
      variant="contained"
      type={type}
      width={width}
      margin={margin}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </MuiButtonStyled>
  );
};

export default Button;
