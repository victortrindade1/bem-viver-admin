interface IMuiSelectForm {
  initialValue: string;
  name: string;
  label: string;
  options: any;
  onHandleSubmit?(event: any): Promise<void>;
  width?: string;
  control: any;
}

interface ISelectItem {
  id: string;
  value: string;
}

interface ITextInputForm {
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
}

interface IMaskTextInputForm extends ITextInputForm {
  mask: string;
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
