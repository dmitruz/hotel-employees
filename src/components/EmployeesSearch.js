import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';
import './EmployeesSearch.scss';
import { RiUserSearchFill } from 'react-icons/ri';

const EmployeesSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => {
    return state.employees.searchTerm;
  });

  const handleSearchTermChange = e => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="list__header">
      <h3 className="title">ALL Employees</h3>
      <div className="search">
        <RiUserSearchFill />
        <input
          className="input"
          placeholder="Search employee"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default EmployeesSearch;
