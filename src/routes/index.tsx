import { useContext } from "react";

import AuthContext from "contexts/auth";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

export default function MyRoutes() {
  const { signed } = useContext(AuthContext);

  return signed ? <PrivateRoutes /> : <PublicRoutes />;
}
