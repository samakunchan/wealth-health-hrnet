import {
  ADD_EMPLOYEE,
  EMPLOYEE_FORM_IS_IDLE,
  EMPLOYEE_FORM_IS_LOADING,
  EMPLOYEE_FORM_IS_REJECT,
  EMPLOYEE_FORM_IS_SUCCEEDED,
  EMPLOYEE_SLICE_NAME,
  EMPLOYEES_IS_LOADING,
  EMPLOYEES_IS_NOT_SUCCESSFULLY_LOADED,
  EMPLOYEES_IS_SUCCESSFULLY_LOADED,
  EMPLOYEES_KEY_STORAGE,
  ERROR_MESSAGE,
  GET_EMPLOYEES,
} from './employee-action-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  status: EMPLOYEE_FORM_IS_IDLE,
  error: ERROR_MESSAGE,
  isProcessing: false,
};

export const createOneEmployee = createAsyncThunk(ADD_EMPLOYEE, async ({ employee }) => {
  if (employee === undefined) {
    throw new Error(`Le formulaire n'est pas bien rempli.`);
  }
  if (localStorage.getItem(EMPLOYEES_KEY_STORAGE)) {
    const storedEmployees = JSON.parse(localStorage.getItem(EMPLOYEES_KEY_STORAGE));
    storedEmployees.concat(employee);
    return storedEmployees.concat(employee);
  }
  return [employee];
});

export const readAllEmployees = createAsyncThunk(GET_EMPLOYEES, async () => {
  if (localStorage.getItem(EMPLOYEES_KEY_STORAGE)) {
    return JSON.parse(localStorage.getItem(EMPLOYEES_KEY_STORAGE));
  }
  return [];
});

export const { actions, reducer } = createSlice({
  name: EMPLOYEE_SLICE_NAME,
  initialState,
  extraReducers(builder) {
    builder
      .addCase(createOneEmployee.pending, state => {
        state.status = EMPLOYEE_FORM_IS_LOADING;
        state.error = ERROR_MESSAGE;
        state.isProcessing = true;
      })
      .addCase(createOneEmployee.fulfilled, (state, action) => {
        state.status = EMPLOYEE_FORM_IS_SUCCEEDED;
        state.error = ERROR_MESSAGE;
        state.isProcessing = false;
        state.employees = action.payload;
        localStorage.setItem(EMPLOYEES_KEY_STORAGE, JSON.stringify(action.payload));
      })
      .addCase(createOneEmployee.rejected, (state, action) => {
        state.status = EMPLOYEE_FORM_IS_REJECT;
        state.error = action[`error`].message;
        state.isProcessing = false;
      });

    builder
      .addCase(readAllEmployees.pending, state => {
        state.status = EMPLOYEES_IS_LOADING;
        state.error = ERROR_MESSAGE;
        state.isProcessing = true;
      })
      .addCase(readAllEmployees.fulfilled, (state, action) => {
        state.status = EMPLOYEES_IS_SUCCESSFULLY_LOADED;
        state.error = ERROR_MESSAGE;
        state.isProcessing = false;
        state.employees = action.payload;
      })
      .addCase(readAllEmployees.rejected, (state, action) => {
        state.status = EMPLOYEES_IS_NOT_SUCCESSFULLY_LOADED;
        state.error = action[`error`].message;
        state.isProcessing = false;
      });
  },
});

export const { resetStateForm } = actions;

export default reducer;
