import './EmployeesForm.scss';

const EmployeesForm = () => {
  return (
    <>
      <div className="employees__header">
        <h2 className="employees__header-text">Employees</h2>
      </div>
      <div className="form__panel">
        <h3 className="subtitle">Add Employee</h3>
        <form className="employees__form">
          <div className="field__group">
            <div className="field">
              <label className="label">Name</label>
              <input className="input is-expanded" />
            </div>
            <div className="field">
              <label className="label">Phone</label>
              <input className="input is-expanded" type="number" />
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
