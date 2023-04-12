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
  clickDelete?: any;
}

interface IButton {
  label: string | IconType;
  type?: "button" | "reset" | "submit";
  onClick?: any;
  sx?: any;
}
