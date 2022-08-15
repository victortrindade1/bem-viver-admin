import React from "react";

import TitlePage from "components/TitlePage";
import BodyLayout from "components/BodyLayout";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <TitlePage titleLabel="Dashboard" />
      <BodyLayout>
        <h2>Últimos Pagamentos</h2>
      </BodyLayout>
    </Container>
  );
};

export default Dashboard;
