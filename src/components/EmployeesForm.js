import './EmployeesForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeNumber, addEmployee } from '../store';

const EmployeesForm = () => {
  const dispatch = useDispatch();
  const { name, number } = useSelector(state => {
    return {
      name: state.form.name,
      number: state.form.number,
    };
  });

  const handleNameChange = e => {
    dispatch(changeName(e.target.value));
  };

  const handleNumberChange = e => {
    const employeeNumber = parseInt(e.target.value) || 0;
    dispatch(changeNumber(employeeNumber));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addEmployee({ name, number }));
    dispatch(changeName(''));
    dispatch(changeNumber(''));
  };

  return (
    <>
      <div className="employees__header">
        <h2 className="employees__header-text">Employees</h2>
      </div>
      <div className="form__panel">
        <h3 className="subtitle">Add Employee</h3>
        <form onSubmit={handleSubmit} className="employees__form">
          <div className="field__group">
            <div className="field">
              <label className="label">Name</label>
              <input className="input is-expanded" value={name} onChange={handleNameChange} />
            </div>
            <div className="field">
              <label className="label">Phone</label>
              <input
                className="input is-expanded"
                value={number}
                onChange={handleNumberChange}
                type="number"
              />
            </div>
          </div>
          <div className="form__submit-btn">
            <button className="button is-link">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeesForm;
