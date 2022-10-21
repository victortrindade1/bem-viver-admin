import { Route, Outlet, BrowserRouter, Routes } from "react-router-dom";

import AuthLayout from "pages/_layouts/auth";
import Login from "pages/Login";

const PublicRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
