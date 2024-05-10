import './EmployeesForm.scss';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeName,
  changeNumber,
  changeEmail,
  addEmployee,
  changeGenderMale,
  changeGenderFemale,
  changeBirth,
  changeDepartment,
  changePosition,
  changeStartDate,
} from '../store';

const EmployeesForm = () => {
  const dispatch = useDispatch();
  const { name, number, email, genderMale, genderFemale, birth, position, department, startDate } = useSelector(state => {
    return {
      name: state.form.name,
      number: state.form.number,
      email: state.form.email,
      genderMale: state.form.genderMale,
      genderFemale: state.form.genderFemale,
      birth: state.form.birth,
      position: state.form.position,
      department: state.form.department,
      startDate: state.form.startDate,
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

  // const handleGenderMaleChange = e => {
  //   dispatch(changeGenderMale(e.target.value));
  // };

  const handleGenderFemaleChange = e => {
    dispatch(changeGenderFemale(e.target.value));
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
  const handleStartDateChange = e => {
    dispatch(changeStartDate(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addEmployee({
        name,
        number,
        email,
        genderMale,
        genderFemale,
        birth,
        position,
        department,
        startDate,
      }),
    );

    dispatch(changeName(''));
    dispatch(changeNumber(''));
    dispatch(changeEmail(''));
    dispatch(changeGenderMale(''));
    dispatch(changeGenderFemale(''));
    dispatch(changeBirth(''));
    dispatch(changeDepartment(''));
    dispatch(changePosition(''));
    dispatch(changeStartDate(''));
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

              <input
                type="radio"
                name="gender"
                value="Male"
                id="male"
                checked={genderMale === 'Male'}
                onChange={handleGenderFemaleChange}
              />
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                name="gender"
                value="Female"
                id="female"
                checked={genderFemale === 'Female'}
                onChange={handleGenderFemaleChange}
              />
              <label htmlFor="female">Female</label>
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
                onChange={handleDepartmentChange}
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
                Start Date:
                <input
                  className="date-input"
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  id="date-start"
                  name="start-date"
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
