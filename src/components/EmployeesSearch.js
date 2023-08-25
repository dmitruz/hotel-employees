import './EmployeesSearch.scss';
import { RiUserSearchFill } from 'react-icons/ri';
const EmployeesSearch = () => {
  return (
    <div className="list__header">
      <h3 className="title">ALL Employees</h3>
      <div className="search">
        <RiUserSearchFill />
        <input className="input" placeholder="Search employee" />
      </div>
    </div>
  );
};

export default EmployeesSearch;
