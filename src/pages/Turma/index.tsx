import React, { useState, useEffect, useCallback } from "react";
import { FaUsers, FaUniversity, FaBook, FaPen } from "react-icons/fa";

import { useAppSelector } from "hooks";
import { selectTurma } from "store/slices/turma";

import { IChildren } from "types/layout";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";
// import MuiModal from "components/MuiModal";

// import theme from "styles/theme";

const Turma: React.FC<IChildren> = ({ children }) => {
  const [title, setTitle] = useState("Nova Turma");

  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const turma = useAppSelector(selectTurma);

  const links = [
    {
      label: "Informações Gerais",
      Icon: FaUsers,
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
    {
      label: "Editar Turma",
      Icon: FaPen,
      url: `/turma/${turma.turmaDados?.id}/editar`,
    },
  ];

  const handleTitleLabel = useCallback(() => {
    let titleLabel = turma.turmaDados?.turma;

    if (turma.turmaDados?.dados_turno?.turno) {
      titleLabel = titleLabel + " - " + turma.turmaDados?.dados_turno?.turno;
    }

    if (turma.turmaDados?.dados_ano?.ano) {
      titleLabel = titleLabel + " - " + turma.turmaDados?.dados_ano?.ano;
    }

    titleLabel && setTitle(titleLabel);
  }, [
    turma.turmaDados?.dados_ano?.ano,
    turma.turmaDados?.dados_turno?.turno,
    turma.turmaDados?.turma,
  ]);

  useEffect(() => {
    turma.turmaDados?.id && handleTitleLabel();
  }, [handleTitleLabel, turma]);

  return (
    <>
      <DarkSideLayout>
        {links && turma.turmaDados?.ano_id && turma.turmaDados?.turno_id && (
          <BodyMenu links={links} />
        )}
      </DarkSideLayout>
      <LightSideLayout titleLabel={title}>{children}</LightSideLayout>
    </>
  );
};

export default Turma;
