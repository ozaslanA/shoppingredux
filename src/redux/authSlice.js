// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem("token") || null, // Local storage'dan token'ı al
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.token = action.payload.token;
      state.error = null;

      // Local storage'a token'ı kaydet
      localStorage.setItem("token", action.payload.token);
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;

      // Başarısız giriş durumunda local storage'dan token'ı kaldır
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;

// Redux Thunk ile asenkron işlemleri yönetmek
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("https://reqres.in/api/register", {
      email,
      password,
    });
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export default authSlice.reducer;
