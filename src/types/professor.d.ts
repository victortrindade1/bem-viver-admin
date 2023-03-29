interface ProfessorState {
  statusAsync?: "idle" | "loading" | "failed";
  professorDados: ProfessorDados | null;
}

interface ProfessorDados {
  id: number;
  professor_nome: string;
  professor_cpf: string;
  professor_rg: string;
  professor_data_nascimento: string;
  profissional_registro_cfep: string;
  profissional_formacao_acad_1: string;
  profissional_instituicao_1: string;
  profissional_grau_formacao_1: string;
  profissional_formacao_acad_2: string;
  profissional_instituicao_2: string;
  profissional_grau_formacao_2: string;
  profissional_num_carteira_trabalho: string;
  profissional_serie_carteira_trabalho: string;
  profissional_nis_pis: string;
  end_logradouro: string;
  end_num: string;
  end_complemento: string;
  end_bairro: string;
  end_cep: string;
  end_cidade: string;
  createdAt: string;
  updatedAt: string;
  turmas?: TurmaState[];
  materias?: MateriaState[];
}

interface MateriaState {
  id: number;
  materia: string;
  createdAt: string;
  updatedAt: string;
}
