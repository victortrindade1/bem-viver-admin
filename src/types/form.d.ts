interface ISelectForm extends ITextForm {
  options: any;
}

interface ISelectItem {
  id: number;
  label: string;
}

interface ITextForm {
  register: any;
  name: string;
  label: string;
  onEnter?: any;
  isRequired?: boolean;
  type?: string;
  width?: string;
  minWidth?: string;
  isMultiline?: boolean;
  placeholder?: string;
  control: any;
  errors?: any;
  disabled?: boolean;
  maskType?: "date" | "cpf" | "cnpj" | "tel" | "cep";
  onBlur?: any;
  onChange?: any;
  variant?: "standard" | "outlined";
}

interface ISwitchForm {
  register?: any;
  label: string;
  name: string;
  control: any;
  onChange?: any;
}
