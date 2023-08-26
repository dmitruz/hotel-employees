import { createSlice } from '@reduxjs/toolkit';
import { addEmployee } from './employeesSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    number: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeNumber(state, action) {
      state.number = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addEmployee, (state, action) => {
      state.name = '';
      state.number = '';
    });
  },
});

export const { changeName, changeNumber } = formSlice.actions;
export const formReducer = formSlice.reducer;
