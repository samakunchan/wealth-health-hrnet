import './index.css';
import { Link } from 'react-router-dom';

const NavigateToEmployeeListComponent = ({ to }) => {
  return (
    <div className='employee-link'>
      <Link to={to}>View Current Employees</Link>
    </div>
  );
};

export default NavigateToEmployeeListComponent;
