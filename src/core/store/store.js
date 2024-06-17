import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employee/employee-slice';

export default configureStore({
  reducer: { employeeStore: employeeReducer },
});
