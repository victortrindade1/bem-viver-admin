interface ITextInputForm {
  name: string;
  label: string;
  onHandleSubmit(event: any): void;
  isRequired?: boolean;
  isFullWidth?: boolean;
  type?: string;
  width?: string;
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
