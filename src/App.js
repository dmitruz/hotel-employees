import './App.css';
import EmployeesForm from './components/EmployeesForm';
import EmployeesList from './components/EmployeesList';
import EmployeesSearch from './components/EmployeesSearch';
import EmployeesValue from './components/EmployeesValue';

function App() {
  return (
    <div className="app">
      <EmployeesForm />
      <EmployeesSearch />
      <EmployeesList />
      <EmployeesValue />
    </div>
  );
}

export default App;
