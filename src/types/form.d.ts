interface ISelectForm extends ITextForm {
  options: any;
}

interface ISelectItem {
  id: number;
  label: string;
}

interface ITextForm {
  // refAutocomplete?: any;
  defaultValue?: string;
  register: any;
  name: string;
  label: string;
  onEnter?: any;
  isRequired?: boolean;
  type?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  isMultiline?: boolean;
  placeholder?: string;
  control: any;
  errors?: any;
  disabled?: boolean;
  maskType?: "date" | "cpf" | "cnpj" | "tel" | "cep";
  onBlur?: any;
  onChange?: any;
  variant?: "standard" | "outlined";
  options?: string[];
  isSelect?: boolean;
}

interface ISwitchForm {
  register?: any;
  label: string;
  name: string;
  control: any;
  onChange?: any;
}
