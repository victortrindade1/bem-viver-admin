import React from "react";

// import TitlePage from "components/TitlePage";
import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";

// import { Container } from "./styles";

const Professores: React.FC = () => {
  return (
    <>
      <DarkSideLayout />
      <LightSideLayout titleLabel="Professores">
        <div></div>
      </LightSideLayout>
    </>
  );
};

export default Professores;
