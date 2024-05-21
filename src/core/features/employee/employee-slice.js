import {
  AUTH_IS_IDLE,
  AUTH_IS_LOADING,
  AUTH_IS_REJECT,
  AUTH_IS_SUCCEEDED,
  AUTH_LOCALSTORAGE_NAME,
  AUTH_LOGIN_NAME,
  AUTH_LOGOUT_NAME,
  AUTH_SLICE_NAME,
  AUTH_TOKEN_DEFAULT_MESSAGE,
  AUTH_TOKEN_LOCAL_STORAGE_MESSAGE,
  ERROR_MESSAGE,
} from './employee-action-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EmployeeService } from './employee-service';

const userService = new EmployeeService();

export const authenticateUser = createAsyncThunk(AUTH_LOGIN_NAME, async ({ email, password }) => {
  return userService.login({ email, password });
});

export const disconnectUser = createAsyncThunk(AUTH_LOGOUT_NAME, async ({ user }) => {
  return userService.fakeLogout();
});

const initialState = {
  accessToken: AUTH_TOKEN_DEFAULT_MESSAGE,
  tokenFromLocalStorage: AUTH_TOKEN_LOCAL_STORAGE_MESSAGE,
  status: AUTH_IS_IDLE,
  error: ERROR_MESSAGE,
  isProcessing: false,
};

const reducers = {
  removeTokenToLocalStorage: () => {
    localStorage.removeItem(AUTH_LOCALSTORAGE_NAME);
  },
};

export const { actions, reducer } = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers,
  extraReducers(builder) {
    builder
      .addCase(authenticateUser.pending, state => {
        state.accessToken = AUTH_TOKEN_DEFAULT_MESSAGE;
        state.tokenFromLocalStorage = AUTH_TOKEN_LOCAL_STORAGE_MESSAGE;
        state.status = AUTH_IS_LOADING;
        state.error = ERROR_MESSAGE;
        state.isProcessing = true;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.status = AUTH_IS_SUCCEEDED;
        state.accessToken = action.payload;
        state.tokenFromLocalStorage = action.payload;
        state.error = ERROR_MESSAGE;
        state.isProcessing = false;
        localStorage.setItem(AUTH_LOCALSTORAGE_NAME, action.payload.toString());
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.status = AUTH_IS_REJECT;
        state.accessToken = AUTH_TOKEN_DEFAULT_MESSAGE;
        state.tokenFromLocalStorage = AUTH_TOKEN_LOCAL_STORAGE_MESSAGE;
        state.error = action[`error`].message;
        state.isProcessing = false;
      })
      .addCase(disconnectUser.fulfilled, (state, action) => {
        state.status = AUTH_IS_IDLE;
        state.accessToken = AUTH_TOKEN_DEFAULT_MESSAGE;
        state.tokenFromLocalStorage = AUTH_TOKEN_LOCAL_STORAGE_MESSAGE;
        state.error = ERROR_MESSAGE;
        state.isProcessing = false;
        localStorage.removeItem(AUTH_LOCALSTORAGE_NAME);
      });
  },
});

export const { removeTokenToLocalStorage } = actions;

export default reducer;
