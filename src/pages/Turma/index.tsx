import React from "react";
import { FaInfoCircle, FaUniversity, FaBook } from "react-icons/fa";

import { useAppSelector } from "hooks";
import { selectTurma } from "store/slices/turma";

import { IChildren } from "types/layout";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";
// import MuiModal from "components/MuiModal";

// import theme from "styles/theme";

const Turma: React.FC<IChildren> = ({ children }) => {
  // const [openModal, setOpenModal] = useState(false);
  // const handleOpenModal = () => setOpenModal(true);
  // const handleCloseModal = () => setOpenModal(false);

  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const turma = useAppSelector(selectTurma);

  const links = [
    {
      label: "Informações Gerais",
      Icon: FaInfoCircle,
      url: `/turma/${turma.turmaDados?.id}/informacoes`,
    },

    {
      label: "Quadro de Horário",
      Icon: FaBook,
      url: `/turma/${turma.turmaDados?.id}/horario`,
    },
    {
      label: "Lista de Presença",
      Icon: FaUniversity,
      url: `/turma/${turma.turmaDados?.id}/presenca`,
    },
  ];

  return (
    <>
      <DarkSideLayout>
        {links && turma.turmaDados?.id && <BodyMenu links={links} />}
      </DarkSideLayout>
      <LightSideLayout titleLabel={turma.turmaDados?.turma || "Nova Turma"}>
        {children}
      </LightSideLayout>
    </>
  );
};

export default Turma;
