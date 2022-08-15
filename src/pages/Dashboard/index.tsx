import React from "react";

import TitlePage from "components/TitlePage";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <TitlePage titleLabel="Dashboard" />
    </Container>
  );
};

export default Dashboard;
