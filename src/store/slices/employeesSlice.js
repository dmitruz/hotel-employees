import { createSlice, nanoid } from '@reduxjs/toolkit';

const EmployeesSlice = createSlice({
  name: 'employees',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addEmployee(state, action) {
      state.data.push({
        name: action.payload.name,
        number: action.payload.number,
        email: action.payload.email,
        birth: action.payload.birth,
        department: action.payload.department,
        position: action.payload.position,
        startDate: action.payload.startDate,
        id: nanoid(),
      });
    },
    removeEmployee(state, action) {
      // Assumption:
      // action.payload === the id of the car we want to remove
      const updated = state.data.filter(employee => {
        return employee.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addEmployee, removeEmployee } = EmployeesSlice.actions;
export const employeesReducer = EmployeesSlice.reducer;
