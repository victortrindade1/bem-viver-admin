interface ITextInputForm {
  name: string;
  label: string;
  onHandleSubmit(event: any): void;
  isRequired?: boolean;
  type?: string;
  width?: string;
  minWidth?: string;
  isMultiline?: boolean;
}

interface ISelectForm {
  name: string;
  label: string;
  onHandleSubmit(event: any): void;
  isRequired?: boolean;
  isFullWidth?: boolean;
  width?: string;
  options: {
    id: string;
    label: string;
  }[];
}
