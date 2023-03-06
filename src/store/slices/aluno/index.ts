import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import api from "services/api";
import { RootState } from "store";

const initialState: AlunoState = {
  statusAsync: "idle",
  alunoDados: {
    id: 0,
    ativo: false,
    matricula: "",
    nome: "",
    statuspagamento: "",
    dados_pessoais_rg: null,
    dados_pessoais_cpf: null,
    dados_pessoais_data_nascimento: null,
    dados_pessoais_num_certidao: null,
    dados_pessoais_folha_certidao: null,
    dados_pessoais_livro_certidao: null,
    contatos_pai_nome: null,
    contatos_pai_rg: null,
    contatos_pai_cpf: null,
    contatos_pai_cnpj: null,
    contatos_pai_data_nascimento: null,
    contatos_pai_tel: null,
    contatos_pai_cel: null,
    contatos_pai_email: null,
    contatos_mae_nome: null,
    contatos_mae_rg: null,
    contatos_mae_cpf: null,
    contatos_mae_cnpj: null,
    contatos_mae_data_nascimento: null,
    contatos_mae_tel: null,
    contatos_mae_cel: null,
    contatos_mae_email: null,
    contatos_resp_nome: null,
    contatos_resp_rg: null,
    contatos_resp_cpf: null,
    contatos_resp_cnpj: null,
    contatos_resp_data_nascimento: null,
    contatos_resp_tel: null,
    contatos_resp_cel: null,
    contatos_resp_email: null,
    contatos_end_logradouro: null,
    contatos_end_num: null,
    contatos_end_complemento: null,
    contatos_end_bairro: null,
    contatos_end_cep: null,
    contatos_end_cidade: null,
    contatos_buscar1_nome: null,
    contatos_buscar1_parentesco: null,
    contatos_buscar1_contato: null,
    contatos_buscar2_nome: null,
    contatos_buscar2_parentesco: null,
    contatos_buscar2_contato: null,
    contatos_buscar3_nome: null,
    contatos_buscar3_parentesco: null,
    contatos_buscar3_contato: null,
    dados_escolares_data_pre_matricula: null,
    dados_escolares_data_matricula: null,
    dados_escolares_data_encerramento: null,
    dados_escolares_observacoes: null,
    anamnese_pediatra: null,
    anamnese_contato_pediatra: null,
    anamnese_alergias: null,
    anamnese_medicacao: null,
    anamnese_temperatura_banho: null,
    anamnese_observacoes: null,

    createdAt: "",
    updatedAt: "",
    turma_id: 0,
    periodo_id: 0,
    horaentrada_id: 0,
    horasaida_id: 0,
    dados_turma: null,
    dados_periodo: null,
    dados_horaentrada: null,
    dados_horasaida: null,
  },
};

export const storeAluno = createAsyncThunk(
  "aluno/store",
  async (alunoDados: AlunoDados) => {
    try {
      const response = await api.post(`/alunos`, alunoDados);

      toast.success("Dados salvos com sucesso!");

      return response;
    } catch (error) {
      console.log(error);
      toast.error("Erro ao salvar dados.");

      throw new Error("Erro ao salvar dados.");
    }
  }
);

export const updateAluno = createAsyncThunk(
  "aluno/update",
  async (alunoDados: AlunoDados) => {
    try {
      const response = await api.put(`/alunos/${alunoDados.id}`, alunoDados);

      toast.success("Dados salvos com sucesso!");

      return response;
    } catch (error) {
      console.log(error);

      toast.error("Erro ao salvar dados.");

      throw new Error("Erro ao salvar dados.");
    }
  }
);

export const showAluno = createAsyncThunk(
  "aluno/show",
  async (alunoId: number) => {
    try {
      const response = await api.get(`/alunos/${alunoId}`);

      return response;
    } catch (error) {
      toast.error("Não foi possível carregar dados.");
      throw new Error("Não foi possível carregar dados.");
    }
  }
);

export const deleteAluno = createAsyncThunk(
  "aluno/delete",
  async (alunoId: number) => {
    try {
      const response = await api.delete(`/alunos/${alunoId}`);

      toast.success("Dados excluídos com sucesso!");

      return response;
    } catch (error) {
      toast.error("Não foi possível excluir dados.");
      throw new Error("Não foi possível excluir dados.");
    }
  }
);

const alunoSlice = createSlice({
  name: "aluno",
  initialState,
  reducers: {
    // store: (state, action) => {
    //   state.alunoDados = action.payload.data;
    // },
  },
  extraReducers: (builder) => {
    builder
      // storeAluno
      .addCase(storeAluno.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(storeAluno.fulfilled, (state, action: any) => {
        state.statusAsync = "idle";
        state.alunoDados = action.payload.data;
      })
      .addCase(storeAluno.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log("Action - reject store aluno", action);
      })
      // updateAluno
      .addCase(updateAluno.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(updateAluno.fulfilled, (state, action: any) => {
        state.statusAsync = "idle";
        state.alunoDados = action.payload.data;
      })
      .addCase(updateAluno.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log(action);
      })
      // showAluno
      .addCase(showAluno.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(showAluno.fulfilled, (state, action: any) => {
        state.statusAsync = "idle";
        state.alunoDados = action.payload.data;
      })
      .addCase(showAluno.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log(action);
      })
      // deleteAluno
      .addCase(deleteAluno.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(deleteAluno.fulfilled, (state) => {
        state.statusAsync = "idle";
        state.alunoDados = null;
      })
      .addCase(deleteAluno.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log(action);
      });
  },
});

// export const { store } = alunoSlice.actions;

export const selectAluno = (state: RootState) => state.aluno;

export default alunoSlice.reducer;
