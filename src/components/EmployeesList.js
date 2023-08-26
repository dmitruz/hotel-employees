import './EmployeesList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeEmployee } from '../store';

const EmployeesList = () => {
  const dispatch = useDispatch();
  const { employees, name } = useSelector(({ form, employees: { data, searchTerm } }) => {
    const filteredEmployees = data.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return {
      employees: filteredEmployees,
      name: form.name,
    };
  });

  const handleEmployeeDelete = employee => {
    dispatch(removeEmployee(employee.id));
  };

  const renderedEmployees = employees.map(employee => {
    const bold = name && employee.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={employee.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {employee.name} - {employee.number}
        </p>
        <button className="button__delete" onClick={() => handleEmployeeDelete(employee)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="employees__list">
      {renderedEmployees}
      <hr />
    </div>
  );
};

export default EmployeesList;
