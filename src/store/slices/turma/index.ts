import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import api from "services/api";
import { RootState } from "store";

const initialState: TurmaState = {
  statusAsync: "idle",
  turmaDados: {
    id: 0,
    turma: "",
    ano_id: null,
    turno_id: null,
    createdAt: "",
    updatedAt: "",
    dados_ano: {
      ano: "",
      sistema_id: 0,
      dados_sistema: {
        id: 0,
        sistema: "",
      },
    },
    dados_turno: {
      turno: "",
    },
    materias_professor: [],
    professor_horario: [],
  },
};

export const storeTurma = createAsyncThunk(
  "turma/store",
  async (turmaDados: StoreTurma) => {
    try {
      const response = await api.post(`/turmas`, turmaDados);

      toast.success("Dados salvos com sucesso!");

      return response;
    } catch (error) {
      console.log(error);
      toast.error("Erro ao salvar dados.");

      throw new Error("Erro ao salvar dados.");
    }
  }
);

export const updateTurma = createAsyncThunk(
  "turma/update",
  async (turmaDados: any) => {
    try {
      const response = await api.put(`/turmas/${turmaDados.id}`, turmaDados);

      toast.success("Dados salvos com sucesso!");

      return response;
    } catch (error) {
      console.log(error);

      toast.error("Erro ao salvar dados.");

      throw new Error("Erro ao salvar dados.");
    }
  }
);

export const showTurma = createAsyncThunk(
  "turma/show",
  async (turmaId: number) => {
    try {
      const response = await api.get(`/turmas/${turmaId}`);

      return response;
    } catch (error) {
      toast.error("Não foi possível carregar dados.");
      throw new Error("Não foi possível carregar dados.");
    }
  }
);

export const deleteTurma = createAsyncThunk(
  "turma/delete",
  async (turmaId: number) => {
    try {
      const response = await api.delete(`/turmas/${turmaId}`);

      toast.success("Dados excluídos com sucesso!");

      return response;
    } catch (error) {
      toast.error("Não foi possível excluir dados.");
      throw new Error("Não foi possível excluir dados.");
    }
  }
);

const turmaSlice = createSlice({
  name: "turma",
  initialState,
  reducers: {
    cleanState: (state) => {
      state.turmaDados = null;
    },
    // cleanAno: (state: any) => {
    //   state.turmaDados.ano_id = null;
    //   state.turmaDados.dados_ano = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      // storeTurma
      .addCase(storeTurma.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(storeTurma.fulfilled, (state, action: any) => {
        state.statusAsync = "idle";
        state.turmaDados = action.payload.data;
      })
      .addCase(storeTurma.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log("Action - reject store turma", action);
      })
      // updateTurma
      .addCase(updateTurma.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(updateTurma.fulfilled, (state, action: any) => {
        state.statusAsync = "idle";
        state.turmaDados = action.payload.data;
      })
      .addCase(updateTurma.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log(action);
      })
      // showTurma
      .addCase(showTurma.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(showTurma.fulfilled, (state, action: any) => {
        state.statusAsync = "idle";
        state.turmaDados = action.payload.data;
      })
      .addCase(showTurma.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log(action);
      })
      // deleteTurma
      .addCase(deleteTurma.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(deleteTurma.fulfilled, (state) => {
        state.statusAsync = "idle";
        state.turmaDados = null;
      })
      .addCase(deleteTurma.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log(action);
      });
  },
});

// export const { cleanState, cleanAno } = turmaSlice.actions;
export const { cleanState } = turmaSlice.actions;

export const selectTurma = (state: RootState) => state.turma;

export default turmaSlice.reducer;
