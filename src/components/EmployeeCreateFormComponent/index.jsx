import './index.css';
import { useEffect, useState } from 'react';
import { OCModalComponent } from 'oc-modal';
import 'oc-modal/dist/index.css';
import DatetimePickerComponent from '../DatetimePikerComponent';
import MenuDropDownComponent from '../MenuDropDownComponent';
import { MenuDropdown } from '../../core/utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmployeeFormStatus } from '../../core/features/employee/employee-selector';
import { EMPLOYEE_FORM_IS_SUCCEEDED } from '../../core/features/employee/employee-action-types';
import { createOneEmployee } from '../../core/features/employee/employee-slice';

// /**
//  * Exemple de bouton close en composant.
//  * @param setIsOpenModal
//  * @return {JSX.Element}
//  * @constructor
//  */
// const CloseBtnChidlren = ({ setIsOpenModal }) => {
//   return <div onClick={() => setIsOpenModal(false)}>Fermer</div>;
// };

/**
 * Composant du formulaire de création des employés.
 * @return {JSX.Element}
 * @constructor
 */
const EmployeeCreateFormComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [message, setMessage] = useState('');
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setInputs({ department: 'Sales' });
  }, []);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const employeeFormStatus = useSelector(selectEmployeeFormStatus);

  const onSubmit = async event => {
    event.preventDefault();
    await dispatch(
      createOneEmployee({
        employee: {
          ...inputs,
          firstName: inputs['firstName'] !== undefined ? inputs['firstName'] : '',
          lastName: inputs['lastName'] !== undefined ? inputs['lastName'] : '',
          birthDate: inputs['birthDate'] !== undefined ? inputs['birthDate'] : '',
          startDate: inputs['startDate'] !== undefined ? inputs['startDate'] : '',
          street: inputs['street'] !== undefined ? inputs['street'] : '',
          city: inputs['city'] !== undefined ? inputs['city'] : '',
          state: inputs['state'] !== undefined ? inputs['state'] : '',
          department: inputs['department'] !== undefined ? inputs['department'] : '',
        },
      }),
    );
  };

  useEffect(() => {
    if (employeeFormStatus === EMPLOYEE_FORM_IS_SUCCEEDED) {
      setMessage('Employee Created!');
      setIsOpenModal(true);
    }
  }, [dispatch, employeeFormStatus]);

  const getValue = value => inputs[value] || '';

  const closeModal = () => setIsOpenModal(false);

  return (
    <div className={'employee-create-form'}>
      <form className={'create-employee'} onSubmit={onSubmit}>
        <div className={'left-inputs'}>
          <label htmlFor={'firstName'}>First Name</label>
          <input
            type={'text'}
            id={'firstName'}
            name={'firstName'}
            value={getValue('firstName')}
            onChange={handleChange}
          />

          <label htmlFor={'lastName'}>Last Name</label>
          <input
            type={'text'}
            id={'lastName'}
            name={'lastName'}
            value={getValue('lastName')}
            onChange={handleChange}
          />

          <label htmlFor={'birthDate'}>Date of Birth</label>
          <DatetimePickerComponent name={'birthDate'} setInputs={setInputs} />

          <label htmlFor={'startDate'}>Start Date</label>
          <DatetimePickerComponent name={'startDate'} setInputs={setInputs} />
        </div>

        <div className={'right-inputs'}>
          <fieldset className={'address form-group'}>
            <legend>Address</legend>

            <div>
              <label htmlFor={'street'}>Street</label>
              <input
                type={'text'}
                id={'street'}
                name={'street'}
                value={getValue('street')}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor={'city'}>City</label>
              <input
                type={'text'}
                id={'city'}
                name={'city'}
                value={getValue('city')}
                onChange={handleChange}
              />
            </div>

            <div className={'flex-colum'}>
              <label htmlFor={'state'}>State</label>
              <MenuDropDownComponent
                name={'state'}
                setInputs={setInputs}
                menus={MenuDropdown.states.map(state => state.name)}
                firstText={MenuDropdown.firstState().name}
              />
              <label htmlFor={'zipCode'}>Zip Code</label>
              <input
                type={'number'}
                id={'zipCode'}
                name={'zipCode'}
                value={getValue('zipCode')}
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <label htmlFor={'department'}>Department</label>
          <MenuDropDownComponent
            name={'department'}
            setInputs={setInputs}
            menus={MenuDropdown.departments}
            firstText={MenuDropdown.firstDepartment()}
          />
        </div>
        <input type={'submit'} value={'Save'} className={'save-btn'} />
      </form>
      <OCModalComponent
        message={message}
        isModalActive={isOpenModal}
        updateModal={closeModal}
        // closeBtnChidlren={<CloseBtnChidlren setIsOpenModal={setIsOpenModal} />}
      />
    </div>
  );
};

export default EmployeeCreateFormComponent;
