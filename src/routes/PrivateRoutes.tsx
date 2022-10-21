import { Route, Outlet, BrowserRouter, Routes } from "react-router-dom";

import DefaultLayout from "pages/_layouts/default";
import Dashboard from "pages/Dashboard";
import Alunos from "pages/Alunos";
import Turmas from "pages/Turmas";
import Professores from "pages/Professores";
import Financeiro from "pages/Financeiro";
import Relatorios from "pages/Relatorios";
import ConfigPage from "pages/ConfigPage";

const PrivateRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <DefaultLayout>
              <Outlet />
            </DefaultLayout>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="alunos" element={<Alunos />} />
          <Route path="turmas" element={<Turmas />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="professores" element={<Professores />} />
          <Route path="financeiro" element={<Financeiro />} />
          <Route path="relatorios" element={<Relatorios />} />
          <Route path="configuracoes" element={<ConfigPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
