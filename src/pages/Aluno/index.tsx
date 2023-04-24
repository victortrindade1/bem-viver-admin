import React from "react";
import {
  FaAddressCard,
  FaAddressBook,
  FaGraduationCap,
  FaHeartbeat,
  FaMoneyCheckAlt,
  FaBookReader,
} from "react-icons/fa";

import { useAppSelector } from "hooks";
import { selectAluno } from "store/slices/aluno";
import { IChildren } from "types/layout";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";
// import MuiModal from "components/MuiModal";

// import theme from "styles/theme";

const Aluno: React.FC<IChildren> = ({ children }) => {
  // const [openModal, setOpenModal] = useState(false);
  // const handleOpenModal = () => setOpenModal(true);
  // const handleCloseModal = () => setOpenModal(false);

  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const aluno = useAppSelector(selectAluno);

  const links = [
    {
      label: "Cadastro",
      Icon: FaAddressCard,
      url: `/aluno/${aluno.alunoDados?.id}/cadastro`,
    },
    {
      label: "Contatos",
      Icon: FaAddressBook,
      url: `/aluno/${aluno.alunoDados?.id}/contatos`,
    },
    {
      label: "Dados Escolares",
      Icon: FaGraduationCap,
      url: `/aluno/${aluno.alunoDados?.id}/dadosescolares`,
    },
    {
      label: "Anamnese",
      Icon: FaHeartbeat,
      url: `/aluno/${aluno.alunoDados?.id}/anamnese`,
    },
    {
      label: "Pagamentos",
      Icon: FaMoneyCheckAlt,
      url: "/alunos",
    },
    {
      label: "Histórico Escolar",
      Icon: FaBookReader,
      url: "/alunos",
    },
  ];

  // const handleDeleteAluno = async () => {
  //   aluno.alunoDados?.id && (await dispatch(deleteAluno(aluno.alunoDados?.id)));
  //   navigate("/alunos");
  // };

  return (
    <>
      <DarkSideLayout>{links && <BodyMenu links={links} />}</DarkSideLayout>
      <LightSideLayout titleLabel={aluno.alunoDados?.nome}>
        {children}
      </LightSideLayout>

      {/* <MuiModal
        title="Excluir Permanentemente"
        open={openModal}
        handleClose={handleCloseModal}
        onSubmit={handleDeleteAluno}
        icon={<FaExclamationTriangle color={theme.palette.primary.main} />}
        labelButton="EXCLUIR"
      >
        <div>
          Este aluno terá seus dados excluídos permanentemente. Deseja
          continuar?
        </div>
      </MuiModal> */}
    </>
  );
};

export default Aluno;
