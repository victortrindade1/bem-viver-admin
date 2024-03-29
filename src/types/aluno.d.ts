interface AlunoState {
  statusAsync?: "idle" | "loading" | "failed";
  alunoDados: AlunoDados | null;
}

interface AlunoDados {
  id: number;
  ativo: boolean;
  matricula: string;
  nome: string;
  statuspagamento: string;
  dados_pessoais_rg: string | null;
  dados_pessoais_cpf: string | null;
  dados_pessoais_data_nascimento: string | null;
  dados_pessoais_num_certidao: string | null;
  dados_pessoais_folha_certidao: string | null;
  dados_pessoais_livro_certidao: string | null;
  contatos_pai_nome: string | null;
  contatos_pai_rg: string | null;
  contatos_pai_cpf: string | null;
  contatos_pai_cnpj: string | null;
  contatos_pai_data_nascimento: string | null;
  contatos_pai_tel: string | null;
  contatos_pai_cel: string | null;
  contatos_pai_email: string | null;
  contatos_mae_nome: string | null;
  contatos_mae_rg: string | null;
  contatos_mae_cpf: string | null;
  contatos_mae_cnpj: string | null;
  contatos_mae_data_nascimento: string | null;
  contatos_mae_tel: string | null;
  contatos_mae_cel: string | null;
  contatos_mae_email: string | null;
  contatos_resp_nome: string | null;
  contatos_resp_rg: string | null;
  contatos_resp_cpf: string | null;
  contatos_resp_cnpj: string | null;
  contatos_resp_data_nascimento: string | null;
  contatos_resp_tel: string | null;
  contatos_resp_cel: string | null;
  contatos_resp_email: string | null;
  contatos_end_logradouro: string | null;
  contatos_end_num: string | null;
  contatos_end_complemento: string | null;
  contatos_end_bairro: string | null;
  contatos_end_cep: string | null;
  contatos_end_cidade: string | null;
  contatos_buscar1_nome: string | null;
  contatos_buscar1_parentesco: string | null;
  contatos_buscar1_contato: string | null;
  contatos_buscar2_nome: string | null;
  contatos_buscar2_parentesco: string | null;
  contatos_buscar2_contato: string | null;
  contatos_buscar3_nome: string | null;
  contatos_buscar3_parentesco: string | null;
  contatos_buscar3_contato: string | null;
  dados_escolares_data_pre_matricula: string | null;
  dados_escolares_data_matricula: string | null;
  dados_escolares_data_encerramento: string | null;
  dados_escolares_observacoes: string | null;
  anamnese_pediatra: string | null;
  anamnese_contato_pediatra: string | null;
  anamnese_alergias: string | null;
  anamnese_medicacao: string | null;
  anamnese_temperatura_banho: string | null;
  anamnese_observacoes: string | null;
  createdAt: string;
  updatedAt: string;
  turma_id: number | null;
  periodo_id: number | null;
  horaentrada_id: number | null;
  horasaida_id: number | null;
  dados_turma: TurmaDados | null;
  dados_periodo: PeriodoDados | null;
  dados_horaentrada: HoraEntradaDados | null;
  dados_horasaida: HoraSaidaDados | null;
}

interface SistemaDados {
  id: number;
  sistema: string;
  createdAt: string;
  updatedAt: string;
}

interface AnoDados {
  id: number;
  ano: string;
  sistema_id: number | null;
  dados_sistema: SistemaDados | null;
  createdAt: string;
  updatedAt: string;
}

interface TurmaDados {
  id: number;
  turma: string;
  createdAt: string;
  updatedAt: string;
  ano_id: number | null;
  turno_id: number | null;
  dados_turno: TurnoDados | null;
  dados_ano: AnoDados | null;
  materias_horario?: IMateria[];
}

interface TurnoDados {
  id: number;
  turno: string;
  createdAt: string;
  updatedAt: string;
}

interface PeriodoDados {
  id: number;
  periodo: string;
  createdAt: string;
  updatedAt: string;
}

interface HoraEntradaDados {
  id: number;
  horaentrada: string;
  createdAt: string;
  updatedAt: string;
}

interface HoraSaidaDados {
  id: number;
  horasaida: string;
  createdAt: string;
  updatedAt: string;
}
