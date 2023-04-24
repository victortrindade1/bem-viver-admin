import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import api from "services/api";
import { RootState } from "store";

const initialState = {
  statusAsync: "idle",
  dados: {
    turmas: [],
    turnos: [],
    periodos: [],
    horaentradas: [],
    horasaidas: [],
    anos: [],
    sistemas: [],
    materias: [],
  },
};

export const loadDados = createAsyncThunk(
  "dadosEscolares/loadDados",
  async () => {
    try {
      const turmas = api.get(`/turmas?limit=1000`);
      const turnos = api.get(`/turnos?limit=1000`);
      const periodos = api.get(`/periodos?limit=1000`);
      const horaentradas = api.get(`/horaentradas?limit=1000`);
      const horasaidas = api.get(`/horasaidas?limit=1000`);
      const anos = api.get(`/anos?limit=1000`);
      const sistemas = api.get(`/sistemas?limit=1000`);
      const materias = api.get(`/materias?limit=1000&complete=false`);

      return {
        // Nesse estilo executa todos de uma vez, como um Promise.all mais fácil
        turmas: await turmas,
        turnos: await turnos,
        periodos: await periodos,
        horaentradas: await horaentradas,
        horasaidas: await horasaidas,
        anos: await anos,
        sistemas: await sistemas,
        materias: await materias,
      };
    } catch (error) {
      throw new Error("Não foi possível carregar dados.");
    }
  }
);

export const storeMateria = createAsyncThunk(
  "materia/store",
  async (materiaDados: MateriaState) => {
    try {
      const response = await api.post(`/materias`, materiaDados);

      toast.success("Nova matéria cadastrada!");

      return response;
    } catch (error) {
      console.log(error);
      toast.error("Erro ao salvar dados.");

      throw new Error("Erro ao salvar dados.");
    }
  }
);

const dadosEscolaresSlice = createSlice({
  name: "dadosEscolares",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // loadDados
      .addCase(loadDados.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(loadDados.fulfilled, (state, action: any) => {
        state.statusAsync = "idle";
        state.dados.turmas = action.payload.turmas.data.items;
        state.dados.turnos = action.payload.turnos.data.items;
        state.dados.periodos = action.payload.periodos.data.items;
        state.dados.anos = action.payload.anos.data.items;
        state.dados.horaentradas = action.payload.horaentradas.data.items;
        state.dados.horasaidas = action.payload.horasaidas.data.items;
        state.dados.sistemas = action.payload.sistemas.data.items;
        state.dados.materias = action.payload.materias.data.items;
      })
      .addCase(loadDados.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log("Error: dados escolares not loaded", action);
      })
      // Store Materia
      .addCase(storeMateria.pending, (state) => {
        state.statusAsync = "loading";
      })
      .addCase(storeMateria.fulfilled, (state: any, action: any) => {
        state.statusAsync = "idle";
        state.dados.materias = [...state.dados.materias, action.payload.data];
      })
      .addCase(storeMateria.rejected, (state, action: any) => {
        state.statusAsync = "failed";
        console.log("Action - reject store materia", action);
      });
  },
});

export const selectDadosEscolares = (state: RootState) => state.dadosEscolares;

export default dadosEscolaresSlice.reducer;
