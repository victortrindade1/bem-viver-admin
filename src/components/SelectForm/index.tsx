import React from "react";
import { SelectElement } from "react-hook-form-mui";

// import { Container } from './styles';

const SelectForm: React.FC<ISelectForm> = ({
  label,
  name,
  isFullWidth = false,
  isRequired,
  onHandleSubmit,
  width = "130px",
  options,
}) => {
  const handlePreventDefault = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <SelectElement
      fullWidth={isFullWidth}
      label={label}
      margin="normal"
      id={name}
      name={name}
      style={{
        width,
      }}
      required={isRequired}
      onChange={(event) => console.log(event.target.value)}
      onClick={handlePreventDefault}
      // onSelectCapture={(event) => console.log(event)}
      // onBlurCapture={(event) => onHandleSubmit(event)}
      options={options}
      variant="standard"
    />
  );
};

export default SelectForm;
