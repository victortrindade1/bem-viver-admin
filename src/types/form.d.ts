interface IMuiSelectForm {
  // initialValue: string;
  name: string;
  label: string;
  options: any;
  onHandleSubmit?(event: any): Promise<void>;
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

interface ITextInputForm {
  // id?: string;
  register?: any;
  name: string;
  label: string;
  onHandleSubmit?(event: any): void;
  isRequired?: boolean;
  type?: string;
  width?: string;
  minWidth?: string;
  isMultiline?: boolean;
  placeholder?: string;
  control: any;
  errors?: any;
  disabled?: boolean;
}

interface IMaskTextInputForm extends ITextInputForm {
  mask: string;
  inputRef?: any;
}

// interface ISelectForm {
//   name: string;
//   label: string;
//   onHandleSubmit(event: any): void;
//   isRequired?: boolean;
//   isFullWidth?: boolean;
//   width?: string;
//   options: {
//     id: string;
//     label: string;
//   }[];
// }
