import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import AuthLayout from "pages/_layouts/auth";
import DefaultLayout from "pages/_layouts/default";

import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import Alunos from "pages/Alunos";
import Turmas from "pages/Turmas";
import Professores from "pages/Professores";
import Financeiro from "pages/Financeiro";
import Relatorios from "pages/Relatorios";
import ConfigPage from "pages/ConfigPage";

interface IProtectedRoute {
  isAllowed?: boolean;
  children?: JSX.Element;
  redirectPath?: string;
}

const ProtectedRoute = ({
  isAllowed,
  children,
  redirectPath = "/login",
}: IProtectedRoute) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default function AppRoutes() {
  const user = {
    id: 1,
    name: "Robin",
    roles: ["admin"],
  };

  return (
    <Router>
      <Routes>
        {/* Área pública */}
        <Route
          element={
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          }
        >
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Área protegida */}
        <Route
          element={
            <DefaultLayout>
              <Outlet />
            </DefaultLayout>
          }
        >
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/turmas" element={<Turmas />} />
          </Route>

          {/* Área protegida: admin apenas */}
          <Route
            element={
              <ProtectedRoute
                isAllowed={!!user && user.roles.includes("admin")}
              />
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/professores" element={<Professores />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/configuracoes" element={<ConfigPage />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<p>404!</p>} />
      </Routes>
    </Router>
  );
}
