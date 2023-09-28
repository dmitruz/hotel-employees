import { createSlice } from '@reduxjs/toolkit';
import { addEmployee } from './employeesSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    number: '',
    email: '',
    gender: 'male',

    birth: '',
    department: '',
    position: '',
    start: '',
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
    changeGender(state, action) {
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
    changeStart(state, action) {
      state.start = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addEmployee, (state, action) => {
      state.name = '';
      state.number = '';
      state.email = '';
      state.gender = '';
      state.birth = '';
      state.department = '';
      state.position = '';
      state.start = '';
    });
  },
});

export const {
  changeName,
  changeNumber,
  changeEmail,
  changeGender,
  changeBirth,
  changeDepartment,
  changePosition,
  changeStart,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
