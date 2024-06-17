import './index.css';
import {Link} from 'react-router-dom';

/**
 * Composant pour afficher le lien de navigation vers la page des employees.
 * @param to
 * @return {JSX.Element}
 * @constructor
 */
const NavigateToEmployeeListComponent = ({ to }) => {
  return (
    <div className='employee-link'>
      <Link to={to}>View Current Employees</Link>
    </div>
  );
};

export default NavigateToEmployeeListComponent;
