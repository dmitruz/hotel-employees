import { createSlice } from '@reduxjs/toolkit';
import { addEmployee } from './employeesSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    number: '',
    email: '',
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
  changeBirth,
  changeDepartment,
  changePosition,
  changeStartDate,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
