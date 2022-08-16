import React from "react";

import TitlePage from "components/TitlePage";
import BodyLayout from "components/BodyLayout";

import { Container } from "./styles";
import theme from "styles/theme";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <TitlePage titleLabel="Dashboard" />
      <BodyLayout backgroundColor={theme.bg.main}>
        <h2>Últimos Pagamentos</h2>
      </BodyLayout>
    </Container>
  );
};

export default Dashboard;
