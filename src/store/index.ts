import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./slices/auth";
import alunoReducer from "./slices/aluno";
import professorReducer from "./slices/professor";
import dadosEscolaresReducer from "./slices/dadosEscolares";
import alunosTableReducer from "./slices/alunosTable";
import professoresTableReducer from "./slices/professoresTable";
import turmaReducer from "./slices/turma";

const reducers = combineReducers({
  auth: authReducer,
  aluno: alunoReducer,
  professor: professorReducer,
  dadosEscolares: dadosEscolaresReducer,
  alunosTable: alunosTableReducer,
  professoresTable: professoresTableReducer,
  turma: turmaReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
