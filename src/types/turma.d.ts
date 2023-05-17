interface TurmaState {
  statusAsync?: "idle" | "loading" | "failed";
  turmaDados: TurmaStateDados | null;
}

interface StoreTurma {
  turma: string;
  ano_id: number;
  turno_id: number;
}

interface TurmaStateDados extends StoreTurma {
  id: number;
  ano_id: number | null;
  turno_id: number | null;
  dados_ano?: {
    ano: string;
    sistema_id: number | null;
    dados_sistema?: {
      id: number;
      sistema: string;
    };
  } | null;
  dados_turno?: {
    turno: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  professor_horario?: ProfessorHorario[];
  materias_professor?: IMateria[];
}
