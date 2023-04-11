import React from "react";

import { stringToRandomColor, stringToListColor } from "utils/stringToColor";

import { Container } from "./styles";

interface ITag {
  label: string;
  isRandom?: boolean;
}

const Tag: React.FC<ITag> = ({ label = "", isRandom = false }) => {
  const color = isRandom
    ? stringToRandomColor(label)
    : stringToListColor(label);
  return (
    <>{label ? <Container color={color}>{label}</Container> : <div>-</div>}</>
  );
};

export default Tag;
