import React from "react";
import Button from "@mui/material/Button";

import TestComponent from "components/Test";
// import TestComponent from "src/components/Test";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <h1>Main page</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <TestComponent />
    </Container>
  );
};

export default Main;
