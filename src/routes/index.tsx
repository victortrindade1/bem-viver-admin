import { useAuth } from "contexts/auth";

import AuthLayout from "pages/_layouts/auth";
import Login from "pages/Login";
import DefaultLayout from "pages/_layouts/default";
import Dashboard from "pages/Dashboard";
import Alunos from "pages/Alunos";
import Turmas from "pages/Turmas";
import Professores from "pages/Professores";
import Financeiro from "pages/Financeiro";
import Relatorios from "pages/Relatorios";
import ConfigPage from "pages/ConfigPage";
import LoadingPage from "pages/LoadingPage";

import {
  Route,
  Navigate,
  Outlet,
  useLocation,
  BrowserRouter,
  Routes,
} from "react-router-dom";

export default function MyRoutes() {
  const { signed, loadingLogin } = useAuth();

  if (loadingLogin) {
    return <LoadingPage />;
  }

  const PrivateWrapper = () => {
    const location = useLocation();
    return signed ? (
      <Outlet />
    ) : (
      <Navigate to="/login" replace state={{ from: location }} />
    );
  };

  const PublicWrapper = () => {
    return signed ? <Navigate to="/" replace /> : <Outlet />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateWrapper />}>
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
        </Route>

        <Route element={<PublicWrapper />}>
          <Route
            element={
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            }
          >
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Ooopss... 404!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
