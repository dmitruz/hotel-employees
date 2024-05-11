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
  changeGenderMale,
  changeGenderFemale,
  changeBirth,
  changeDepartment,
  changePosition,
  changeStartDate,
} from './slices/formSlice';

import {
genderReducer
} from './slices/genderSlice';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    form: formReducer,
    gender: genderReducer
  },
});

export {
  store,
  changeName,
  changeNumber,
  changeEmail,
  changeBirth,
  changeGenderMale,
  changeGenderFemale,
  changePosition,
  changeDepartment,
  changeStartDate,
  addEmployee,
  removeEmployee,
  changeSearchTerm,
};
