import { useSelector, useDispatch } from 'react-redux';
import { removeEmployee } from '../store';

const EmployeesList = () => {
  const dispatch = useDispatch();
  const { employees, name } = useSelector(({ form, employees: { data, searchTerm } }) => {
    const filteredCars = data.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return {
      employees: filteredCars,
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
          {employee.name} - ${employee.cost}
        </p>
        <button className="button is-danger" onClick={() => handleEmployeeDelete(employee)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedEmployees}
      <hr />
    </div>
  );
};

export default EmployeesList;
