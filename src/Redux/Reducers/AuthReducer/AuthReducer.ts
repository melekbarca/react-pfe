import { createSlice } from '@reduxjs/toolkit';
import { IAuthReducer } from '../../../Interfaces';

const initiaState: IAuthReducer = {
  accessToken: "",
  refreshToken: "",
  user: null
};

const AuthReducer = createSlice({
  name: 'auth',
  initialState: initiaState,
  reducers: {
    setToken: (state: IAuthReducer, action) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    resetToken: (state: IAuthReducer) => {
      state.accessToken = ""
      state.refreshToken = ""
      state.user = null
    },
  }
});

export const { setToken, resetToken } = AuthReducer.actions;

export default AuthReducer.reducer;
