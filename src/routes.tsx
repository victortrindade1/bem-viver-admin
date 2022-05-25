import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Student from "./pages/Student";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cadastro-de-alunos" element={<Student />} />
      </Routes>
    </Router>
  );
}
