import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

      // Store token and user in local storage
      localStorage.setItem(
        "@AdminAuth:user",
        JSON.stringify(response.data.user)
      );
      localStorage.setItem(
        "@AdminAuth:token",
        JSON.stringify(response.data.user.token)
      );

      return response;
    } catch (error) {
      throw new Error("Erro ao efetuar login.");
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
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const { signOut, updateUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
