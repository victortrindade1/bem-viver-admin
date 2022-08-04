import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Alunos from "./pages/Alunos";

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
    roles: ["teacher"],
  };

  return (
    <Router>
      <Routes>
        {/* Área pública */}
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Área protegida */}
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
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
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<p>404!</p>} />
      </Routes>
    </Router>
  );
}
