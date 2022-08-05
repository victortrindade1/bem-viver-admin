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
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/* </AuthLayout> */}

        {/* Área protegida */}
        <Route
          element={
            <DefaultLayout>
              <Outlet />
            </DefaultLayout>
          }
        >
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route index element={<Alunos />} />
            <Route path="/alunos" element={<Alunos />} />
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
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<p>404!</p>} />
      </Routes>
    </Router>
  );
}
