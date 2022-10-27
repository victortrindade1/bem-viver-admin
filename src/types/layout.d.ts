interface IColor {
  backgroundColor: string;
}

interface IBodyMenu {
  links?: {
    label: string;
    url: string;
    Icon: IconType;
    // color?: string;
  }[];
}
