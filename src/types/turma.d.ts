interface TurmaState {
  statusAsync?: "idle" | "loading" | "failed";
  turmaDados: TurmaDados | null;
}

interface StoreTurma {}

interface TurmaDados extends StoreTurma {
  id: number;
  turma: string;
  ano_id: number;
  turno_id: number;
  dados_ano?: {
    ano: string;
    dados_sistema?: {
      sistema: string;
    };
  };
  dados_turno?: {
    turno: string;
  };
  createdAt: string;
  updatedAt: string;
  professor_horario?: ProfessorHorario[];
  materias_professor?: MateriaState[];
}

interface ProfessorHorario {
  id: number;
  materia_horario?: {
    materia: string;
  };
  dados_turma?: {
    turma: string;
    dados_turno?: {
      turno: string;
    };
    dados_ano?: {
      ano: string;
      dados_sistema?: {
        sistema: string;
      };
    };
  };
}
interface MateriaState {
  // id: number;
  materia: string;
  professores_materias?: {
    id: number;
  };
  // createdAt: string;
  // updatedAt: string;
}

// interface StoreMateria {
//   materia: string;
// }
