import { createSlice } from '@reduxjs/toolkit';
import { addEmployee } from './employeesSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    number: '',
    email: '',
    genderMale: '',
    genderFemale: '',
    birth: '',
    department: '',
    position: '',
    startDate: '',
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeNumber(state, action) {
      state.number = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeGenderMale(state, action) {
      state.gender = action.payload;
    },
     changeGenderFemale(state, action) {
      state.gender = action.payload;
    },
    changeBirth(state, action) {
      state.birth = action.payload;
    },
    changeDepartment(state, action) {
      state.department = action.payload;
    },
    changePosition(state, action) {
      state.position = action.payload;
    },
    changeStartDate(state, action) {
      state.startDate = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addEmployee, (state, action) => {
      state.name = '';
      state.number = '';
      state.email = '';
      state.genderMale = '';
      state.genderFemale = '';
      state.birth = '';
      state.department = '';
      state.position = '';
      state.startDate = '';
    });
  },
});

export const {
  changeName,
  changeNumber,
  changeEmail,
  changeGenderMale,
  changeGenderFemale,
  changeBirth,
  changeDepartment,
  changePosition,
  changeStartDate,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
