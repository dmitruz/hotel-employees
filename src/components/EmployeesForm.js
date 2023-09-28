import './EmployeesForm.scss';
import { useDispatch, useSelector } from 'react-redux';

import { changeName, changeNumber, changeEmail, addEmployee } from '../store';
import {
  changeGender,
  changeBirth,
  changeDepartment,
  changePosition,
  changeStart,
} from '../store/slices/formSlice';

const EmployeesForm = () => {
  const dispatch = useDispatch();
  const { name, number, email, gender, birth, position, department, start } = useSelector(state => {
    return {
      name: state.form.name,
      number: state.form.number,
      email: state.form.email,
      gender: state.form.gender,
      birth: state.form.birth,
      position: state.form.position,
      department: state.form.department,
      start: state.form.start,
    };
  });

  const handleNameChange = e => {
    dispatch(changeName(e.target.value));
  };

  const handleNumberChange = e => {
    const employeeNumber = parseInt(e.target.value) || 0;
    dispatch(changeNumber(employeeNumber));
  };

  const handleEmailChange = e => {
    dispatch(changeEmail(e.target.value));
  };

  const handleGenderChange = e => {
    dispatch(changeGender(e.target.value));
  };

  const handleBirthChange = e => {
    dispatch(changeBirth(e.target.value));
  };
  const handlePositionChange = e => {
    dispatch(changePosition(e.target.value));
  };
  const handleDepartmentChange = e => {
    dispatch(changeDepartment(e.target.value));
  };
  const handleStartChange = e => {
    dispatch(changeStart(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addEmployee({
        name,
        number,
        email,
        gender,
        birth,
        position,
        department,
        start,
      }),
    );

    dispatch(changeName(''));
    dispatch(changeNumber(''));
    dispatch(changeEmail(''));
    dispatch(changeGender(''));
    dispatch(changeBirth(''));
    dispatch(changeDepartment(''));
    dispatch(changePosition(''));
    dispatch(changeStart(''));
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
              <input className="input is-expanded" value={number} onChange={handleNumberChange} />
            </div>
            <div className="field">
              <label className="label">Email</label>
              <input className="input is-expanded" value={email} onChange={handleEmailChange} />
            </div>
            <div className="field__gender">
              <label className="label">Gender</label>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                id="male"
                checked={gender === 'Male'}
                onChange={handleGenderChange}
              />

              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                value="Female"
                id="female"
                checked={gender === 'Female'}
                onChange={handleGenderChange}
              />
            </div>

            <div className="field">
              <label className="date__text" htmlFor="date">
                Date of birth
                <input
                  className="date-input"
                  type="date"
                  value={birth}
                  onChange={handleBirthChange}
                  id="date"
                  name="trip-date"
                  min="1923-01-01"
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                />
                <span className="validity"></span>
              </label>
            </div>
            <div className="field">
              <label className="label">Department</label>
              <select
                name="department"
                id="department"
                value={department}
                onSelect={handleDepartmentChange}
              >
                <option value="Front-office">Front-office</option>
                <option value="Head-department">Head-department</option>
                <option value="HR">HR-department</option>
                <option value="Financial-department">Financial-department</option>
                <option value="Housekeeping">Housekeeping</option>
                <option value="Food and baverage">F&B</option>
                <option value="Kitchen">Kitchen</option>
              </select>
            </div>
            <div className="field">
              <label className="label">Position</label>
              <input
                className="input is-expanded"
                value={position}
                onChange={handlePositionChange}
              />
            </div>
            <div className="field">
              <label className="date__text" htmlFor="date">
                Date of start
                <input
                  className="date-input"
                  value={start}
                  onChange={handleStartChange}
                  type="date"
                  id="date"
                  name="trip-date"
                  min="1923-01-01"
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                />
                <span className="validity"></span>
              </label>
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
