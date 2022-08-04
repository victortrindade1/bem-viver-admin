import React from "react";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Dashboard page</h1>
      <p>Protected: authenticated user with role 'admin' required</p>
    </Container>
  );
};

export default Dashboard;
