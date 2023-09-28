import { configureStore } from '@reduxjs/toolkit';
import {
  employeesReducer,
  addEmployee,
  removeEmployee,
  changeSearchTerm,
} from './slices/employeesSlice';
import {
  formReducer,
  changeName,
  changeNumber,
  changeEmail,
  changeGender,
  changeBirth,
  changeDepartment,
  changePosition,
  changeStart,
} from './slices/formSlice';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    form: formReducer,
  },
});

export {
  store,
  changeName,
  changeNumber,
  changeEmail,
  changeBirth,
  changeGender,
  changePosition,
  changeDepartment,
  changeStart,
  addEmployee,
  removeEmployee,
  changeSearchTerm,
};
