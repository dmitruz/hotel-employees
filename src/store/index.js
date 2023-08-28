import { configureStore } from '@reduxjs/toolkit';
import {
  employeesReducer,
  addEmployee,
  removeEmployee,
  changeSearchTerm,
} from './slices/employeesSlice';
import { formReducer, changeName, changeNumber, changeEmail } from './slices/formSlice';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    form: formReducer,
  },
});

export { store, changeName, changeNumber, changeEmail, addEmployee, removeEmployee, changeSearchTerm };
