interface TurmaState {
  statusAsync?: "idle" | "loading" | "failed";
  turmaDados: TurmaStateDados | null;
}

interface StoreTurma {
  turma: string;
}

interface TurmaStateDados extends StoreTurma {
  id: number;
  ano_id: number | null;
  turno_id: number | null;
  dados_ano?: {
    ano: string;
    dados_sistema?: {
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
