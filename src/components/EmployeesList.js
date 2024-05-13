import './EmployeesList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeEmployee } from '../store';

const EmployeesList = () => {
  const dispatch = useDispatch();
  const { employees, name } = useSelector(({ form, employees: { data, searchTerm } }) => {
    const filteredEmployees = data.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <p className="employee__data"> Name: &nbsp; {employee.name}</p>
        <p className="employee__data">Telephone: &nbsp;{employee.number}</p>
        <p className="employee__data">Email &nbsp; {employee.email}</p>
        <p className="employee__data">Date of birth &nbsp; {employee.birth}</p>
        <p className="employee__data">Department &nbsp; {employee.department}</p>
        <p className="employee__data">Position &nbsp; {employee.position}</p>
        <p className="employee__data">Start date:&nbsp; {employee.startDate}</p>
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
