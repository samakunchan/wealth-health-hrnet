import './index.css';
import { Link } from 'react-router-dom';
import { RouteName } from '../../core/utils/utils';
import DataTableComponent from '../../components/DataTableComponent';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectListEmployees } from '../../core/features/employee/employee-selector';
import { readAllEmployees } from '../../core/features/employee/employee-slice';

// const newOrderColumns = [
//   'age',
//   'firstName',
//   'lastName',
//   'birthDate',
//   'street',
//   'city',
//   'zipCode',
//   'state',
//   'department',
//   'startDate',
// ];
//
// const headersRenamed = [
//   'Age',
//   'Prénom',
//   'Nom',
//   'Date de naissance',
//   'Adresse',
//   'Ville',
//   'Code postale',
//   'Etat',
//   'Département',
//   'Date de début',
// ];

const EmployeeListPage = () => {
  const dispatch = useDispatch();
  const listEmployees = useSelector(selectListEmployees);
  useEffect(() => {
    dispatch(readAllEmployees());
  }, [dispatch]);

  return (
    <section>
      <div id={'employee-div'} className={'container-fluid'}>
        <h1>Current Employees</h1>
        <Link to={RouteName.home}>Home</Link>
        {listEmployees.length > 0 && (
          <DataTableComponent
            datas={listEmployees}
            // datas={listEmployees.map((data, index) => ({ ...data, age: index + 1 }))}
            // orderColumns={newOrderColumns}
            // headersRenamed={headersRenamed}
          />
        )}
      </div>
    </section>
  );
};

export default EmployeeListPage;
