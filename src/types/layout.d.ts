interface IColor {
  backgroundColor: string;
}

interface IBodyMenu extends IColor {
  links?: {
    label: string;
    url: string;
    Icon: IconType;
    // color?: string;
  }[];
}
