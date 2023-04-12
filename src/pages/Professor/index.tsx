import React, { useState } from "react";
import {
  FaAddressCard,
  FaExclamationTriangle,
  FaUniversity,
  FaBook,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "hooks";
import { selectProfessor, deleteProfessor } from "store/slices/professor";

import { IChildren } from "types/layout";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";
import MuiModal from "components/MuiModal";

import theme from "styles/theme";

const Professor: React.FC<IChildren> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const professor = useAppSelector(selectProfessor);

  const links = [
    {
      label: "Cadastro",
      Icon: FaAddressCard,
      url: `/professor/${professor.professorDados?.id}/cadastro`,
    },
    {
      label: "Dados Profissionais",
      Icon: FaUniversity,
      url: `/professor/${professor.professorDados?.id}/dadosprofissionais`,
    },
    {
      label: "Dados Escolares",
      Icon: FaBook,
      url: `/professor/${professor.professorDados?.id}/dadosescolares`,
    },
  ];

  const handleDeleteProfessor = async () => {
    professor.professorDados?.id &&
      (await dispatch(deleteProfessor(professor.professorDados?.id)));
    navigate("/professores");
  };

  return (
    <>
      <DarkSideLayout>
        {links && professor.professorDados?.id && (
          <BodyMenu
            links={links}
            clickDelete={
              professor.professorDados?.professor_nome && handleOpenModal
            }
          />
        )}
      </DarkSideLayout>
      <LightSideLayout
        titleLabel={
          professor.professorDados?.professor_nome || "Novo Professor"
        }
      >
        {children}
      </LightSideLayout>
      {professor.professorDados?.professor_nome && (
        <MuiModal
          title="Excluir Permanentemente"
          open={openModal}
          handleClose={handleCloseModal}
          onSubmit={handleDeleteProfessor}
          icon={<FaExclamationTriangle color={theme.palette.primary.main} />}
          labelButton="EXCLUIR"
        >
          <div>
            Este professor terá seus dados excluídos permanentemente. Deseja
            continuar?
          </div>
        </MuiModal>
      )}
    </>
  );
};

export default Professor;
