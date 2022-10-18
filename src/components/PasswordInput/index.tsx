import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
// import { Container } from './styles';

interface State {
  password: string;
  showPassword: boolean;
}

interface Props {
  name: string;
  control: any;
  defaultValue?: string;
  id: string;
}

const PasswordInput: React.FC<Props> = ({
  name,
  control,
  defaultValue,
  id,
}: Props) => {
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });

  const { register } = useForm();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Controller
      // {...register(name)}
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={() => (
        <TextField
          {...register(name)}
          margin="normal"
          fullWidth
          id={id}
          label="SENHA"
          variant="standard"
          type={values.showPassword ? "text" : "password"}
          autoComplete="current-password"
          value={values.password}
          onChange={handleChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default PasswordInput;
