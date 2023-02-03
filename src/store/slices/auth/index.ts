import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import api from "services/api";
import signInService from "services/authService";
import { RootState } from "store";

export interface AuthState {
  signed: boolean;
  user: IUser | null;
  error: string | null;
  status: "idle" | "loading" | "failed";
}

const initialState: AuthState = {
  signed: false,
  user: null,
  error: null,
  status: "idle",
};

export const signIn = createAsyncThunk(
  "auth/signin",
  async ({ email, password }: IAuth) => {
    try {
      const response = await signInService({ email, password });

      api.defaults.headers.Authorization = `Bearer ${response.data.user.token}`;

      return response;
    } catch (error) {
      toast.error("Erro ao efetuar login.");

      throw new Error("Erro ao efetuar login.");
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (user: IUser) => {
    try {
      const response = await api.put(`/users/${user?.id}`, user);

      toast.success("Dados salvos com sucesso!");

      return response;
    } catch (error) {
      toast.error("Não foi possível salvar.");

      throw new Error("Erro ao salvar dados.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.signed = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // signIn async
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action: any) => {
        state.status = "idle";
        state.signed = true;
        state.user = action.payload.data.user;
      })
      .addCase(signIn.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // update user async
      .addCase(updateUser.pending, (state) => {
        // state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action: any) => {
        // state.status = "idle";
        state.user = action.payload.data;
        // console.log(action);
      })
      .addCase(updateUser.rejected, (state, action: any) => {
        // state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { signOut } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
