import { ReactNode } from "react";

interface IChildren {
  children?: ReactNode;
}

interface IColor {
  backgroundColor: string;
}

interface IBodyMenu {
  links?: {
    label: string;
    url: string;
    Icon: IconType;
    disabled?: boolean;
    // color?: string;
  }[];
  actionDelete?: any;
}

interface IButton {
  label: string;
  type?: "button" | "reset" | "submit";
  width?: string;
  margin?: string;
  // onClick?: (e?: any) => void;
  onClick?: any;
}
