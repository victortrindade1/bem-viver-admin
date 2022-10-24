import { lazy, Suspense } from "react";
import { useAuth } from "contexts/auth";

import AuthLayout from "pages/_layouts/auth";
import DefaultLayout from "pages/_layouts/default";

import LoadingPage from "pages/LoadingPage";

import {
  Route,
  Navigate,
  Outlet,
  useLocation,
  BrowserRouter,
  Routes,
} from "react-router-dom";

const Dashboard = lazy(() => import("pages/Dashboard"));
const Alunos = lazy(() => import("pages/Alunos"));
const Turmas = lazy(() => import("pages/Turmas"));
const Professores = lazy(() => import("pages/Professores"));
const Financeiro = lazy(() => import("pages/Financeiro"));
const Relatorios = lazy(() => import("pages/Relatorios"));
const ConfigPage = lazy(() => import("pages/ConfigPage"));
const Login = lazy(() => import("pages/Login"));

export default function MyRoutes() {
  const { signed, loading } = useAuth();

  if (loading) {
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
            <Route
              index
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="alunos"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Alunos />
                </Suspense>
              }
            />
            <Route
              path="turmas"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Turmas />
                </Suspense>
              }
            />
            <Route
              path="dashboard"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="professores"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Professores />
                </Suspense>
              }
            />
            <Route
              path="financeiro"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Financeiro />
                </Suspense>
              }
            />
            <Route
              path="relatorios"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Relatorios />
                </Suspense>
              }
            />
            <Route
              path="configuracoes"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ConfigPage />
                </Suspense>
              }
            />
          </Route>
        </Route>

        <Route element={<PublicWrapper />}>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Route
            element={
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Login />
                </Suspense>
              }
            />
          </Route>
          {/* </Suspense> */}
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
