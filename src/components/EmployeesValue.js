import './EmployeesValue.scss';
import { useSelector } from 'react-redux';

const EmployeesValue = () => {
  const totalEmployees = useSelector(
    ({ employees: { data, searchTerm } }) =>
      data.filter(employee => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .length,
  );

  return (
    <div className="employee__value">
      <h3 className="totall__text">Total: </h3>
      <hr /> {totalEmployees}
    </div>
  );
};

export default EmployeesValue;
