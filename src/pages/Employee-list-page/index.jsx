import './index.css';
import { Link } from 'react-router-dom';
import { RouteName } from '../../core/utils/utils';

const EmployeeListPage = () => {
  return (
    <div id={'employee-div'} className={'container-fluid'}>
      <h1>Current Employees</h1>
      {/** Remplacer la table par la lib */}
      <table id={'employee-table'} className={'display'}></table>
      <Link to={RouteName.home}>Home</Link>
    </div>
  );
};

export default EmployeeListPage;
