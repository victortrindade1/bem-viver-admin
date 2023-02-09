interface IMuiSelectForm {
  // initialValue: string;
  name: string;
  label: string;
  options: any;
  onBlur?(event: any): Promise<void>;
  // onSubmit?: any;
  width?: string;
  minWidth?: string;
  control: any;
  isRequired?: boolean;
  errors?: any;
}

interface ISelectItem {
  id: string;
  value: string;
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
}

// interface ISelectForm {
//   name: string;
//   label: string;
//   onSubmit(event: any): void;
//   isRequired?: boolean;
//   isFullWidth?: boolean;
//   width?: string;
//   options: {
//     id: string;
//     label: string;
//   }[];
// }
