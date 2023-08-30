import { createSlice } from '@reduxjs/toolkit';
import { addEmployee } from './employeesSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    number: '',
    email: '',
    genderMale: 'male',
    genderFemale: 'female',
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
      state.genderMale = action.payload;
    },
    changeGenderFemale(state, action) {
      state.genderFemale = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addEmployee, (state, action) => {
      state.name = '';
      state.number = '';
      state.email = '';
      state.genderMale = '';
      state.genderFemale = '';
    });
  },
});

export const { changeName, changeNumber, changeEmail, changeGenderMale, changeGenderFemale } =
  formSlice.actions;
export const formReducer = formSlice.reducer;
