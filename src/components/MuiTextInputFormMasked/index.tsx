import React, { useState } from "react";
import InputMask from "react-input-mask";
// import { TextFieldElement } from "react-hook-form-mui";

import { Container } from "./styles";
// import { useState } from "react";
import MuiTextInputForm from "components/MuiTextInputForm";

const TextInputFormMasked: React.FC<IMaskTextInputForm> = ({
  name,
  label,
  onHandleSubmit,
  isRequired = false,
  type,
  width = "167px",
  minWidth = "80px",
  isMultiline = false,
  placeholder,
  control,
  mask,
}) => {
  // console.log(props);

  const [state, setState] = useState("");

  const onChange = (event: any) => setState(event.target.value);

  return (
    <Container width={width} minWidth={minWidth}>
      <InputMask mask={mask} value={state} onChange={onChange}>
        <MuiTextInputForm
          name={name}
          label={label}
          onHandleSubmit={onHandleSubmit}
          isRequired={isRequired}
          type={type}
          width={width}
          minWidth={minWidth}
          isMultiline={isMultiline}
          placeholder={placeholder}
          control={control}
        />
      </InputMask>
    </Container>
  );
};

export default TextInputFormMasked;
