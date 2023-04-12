import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import api from "services/api";
import { RootState } from "store";

const initialState: ProfessorState = {
  statusAsync: "idle",
  professorDados: {
    id: 0,
    professor_nome: "",
    professor_celular: "",
    professor_telefone: "",
    professor_email: "",
    professor_cpf: "",
    professor_rg: "",
    professor_data_nascimento: "",
    profissional_registro_cfep: "",
    profissional_formacao_acad_1: "",
    profissional_instituicao_1: "",
    profissional_grau_formacao_1: "",
    profissional_formacao_acad_2: "",
    profissional_instituicao_2: "",
    profissional_grau_formacao_2: "",
    profissional_num_carteira_trabalho: "",
    profissional_serie_carteira_trabalho: "",
    profissional_nis_pis: "",
    end_logradouro: "",
    end_num: "",
    end_complemento: "",
    end_bairro: "",
    end_cep: "",
    end_cidade: "",
    createdAt: "",
    updatedAt: "",
    professor_horario: [],
  },
};

export const storeProfessor = createAsyncThunk(
  "professor/store",
  async (professorDados: StoreProfessor) => {
    try {
      const response = await api.post(`/professores`, professorDados);

      toast.success("Dados salvos com sucesso!");

      return response;
    } catch (error) {
      console.log(error);
      toast.error("Erro ao salvar dados.");

      throw new Error("Erro ao salvar dados.");
    }
  }
);

export const updateProfessor = createAsyncThunk(
  "professor/update",
  async (professorDados: ProfessorDados) => {
    try {
      const response = await api.put(
        `/professores/${professorDados.id}`,
        professorDados
      );

      toast.success("Dados salvos com sucesso!");

      return response;
    } catch (error) {
      console.log(error);

      toast.error("Erro ao salvar dados.");

      throw new Error("Erro ao salvar dados.");
    }
  }
);

export const showProfessor = createAsyncThunk(
  "professor/show",
  async (professorId: number) => {
    try {
      const response = await api.get(`/professores/${professorId}`);

      return response;
    } catch (error) {
      toast.error("Não foi possível carregar dados.");
      throw new Error("Não foi possível carregar dados.");
    }
  }
);

export const deleteProfessor = createAsyncThunk(
  "professor/delete",
  async (professorId: number) => {
    try {
      const response = await api.delete(`/professores/${professorId}`);

      toast.success("Dados excluídos com sucesso!");

      return response;
    } catch (error) {
      toast.error("Não foi possível excluir dados.");
      throw new Error("Não foi possível excluir dados.");
    }
  }
);

const professorSlice = createSlice({
  name: "professor",
  initialState,
  reducers: {
    cleanState: (state) => {
      state.professorDados = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // storeProfessor
      .addCase(storeProfessor.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(storeProfessor.fulfilled, (state, action: any) => {
        state.statusAsync = "idle";
        state.professorDados = action.payload.data;
      })
      .addCase(storeProfessor.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log("Action - reject store professor", action);
      })
      // updateProfessor
      .addCase(updateProfessor.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(updateProfessor.fulfilled, (state, action: any) => {
        state.statusAsync = "idle";
        state.professorDados = action.payload.data;
      })
      .addCase(updateProfessor.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log(action);
      })
      // showProfessor
      .addCase(showProfessor.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(showProfessor.fulfilled, (state, action: any) => {
        state.statusAsync = "idle";
        state.professorDados = action.payload.data;
      })
      .addCase(showProfessor.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log(action);
      })
      // deleteProfessor
      .addCase(deleteProfessor.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(deleteProfessor.fulfilled, (state) => {
        state.statusAsync = "idle";
        state.professorDados = null;
      })
      .addCase(deleteProfessor.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log(action);
      });
  },
});

export const { cleanState } = professorSlice.actions;

export const selectProfessor = (state: RootState) => state.professor;

export default professorSlice.reducer;
