import React from "react";

import { stringToColor } from "utils/stringToColor";

import { Container } from "./styles";

interface ITag {
  label: string;
}

const Tag: React.FC<ITag> = ({ label = "" }) => {
  const color = stringToColor(label);
  return (
    <>{label ? <Container color={color}>{label}</Container> : <div>-</div>}</>
  );
};

export default Tag;
