import './index.css';
import { Link } from 'react-router-dom';
import { RouteName } from '../../core/utils/utils';
import DataTableComponent from '../../components/DataTableComponent';
import { useState } from 'react';

const newOrderColumns = [
  'firstName',
  'lastName',
  'birthDate',
  'street',
  'city',
  'zipCode',
  'state',
  'department',
  'startDate',
];

const headersRenamed = [
  'Prénom',
  'Nom',
  'Date de naissance',
  'Adresse',
  'Ville',
  'Code postale',
  'Etat',
  'Département',
  'Date de début',
];

const EmployeeListPage = () => {
  const [datas, setDatas] = useState([
    {
      department: 'Engineering',
      firstName: 'cédric',
      lastName: 'badjah',
      street: '12 rue de la paix',
      city: 'MONTPELLIER',
      zipCode: '34090',
      birthDate: '14/06/2024',
      startDate: '28/06/2024',
      state: 'California',
    },
    {
      department: 'Sales',
      firstName: 'john',
      lastName: 'doe',
      street: '20 rue de la guerre',
      city: 'PARIS',
      zipCode: '75000',
      birthDate: '14/06/2024',
      startDate: '28/06/2024',
      state: 'Alabama',
    },
    {
      department: 'Marketing',
      firstName: 'jeanne',
      lastName: "d'huile",
      street: '30 rue de la neutralité',
      city: 'RENNES',
      zipCode: '09000',
      birthDate: '14/06/2024',
      startDate: '28/06/2024',
      state: 'New-York',
    },
  ]);

  return (
    <section>
      <div id={'employee-div'} className={'container-fluid'}>
        <h1>Current Employees</h1>
        <Link to={RouteName.home}>Home</Link>
        <DataTableComponent
          datas={datas}
          setDatas={setDatas}
          orderColumns={newOrderColumns}
          headersRenamed={headersRenamed}
        />
      </div>
    </section>
  );
};

export default EmployeeListPage;
