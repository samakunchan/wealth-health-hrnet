import './index.css';
import { useEffect, useState } from 'react';
import { OCModalComponent } from 'oc-modal';
import 'oc-modal/dist/index.css';

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

  useEffect(() => {
    setInputs({ department: 'Sales' });
  }, []);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const onSubmit = event => {
    event.preventDefault();
    if (
      inputs['firstName'] &&
      inputs['lastName'] &&
      inputs['birthDate'] &&
      inputs['startDate'] &&
      inputs['department']
    ) {
      setMessage('Employee Created!');
      setIsOpenModal(true);
    }
  };

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
          <input
            type={'text'}
            id={'birthDate'}
            name={'birthDate'}
            value={getValue('birthDate')}
            onChange={handleChange}
          />

          <label htmlFor={'startDate'}>Start Date</label>
          <input
            type={'text'}
            id={'startDate'}
            name={'startDate'}
            value={getValue('startDate')}
            onChange={handleChange}
          />
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
              <select
                id={'state'}
                name={'state'}
                value={getValue('state')}
                onChange={handleChange}
              ></select>

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
          <br />

          <label htmlFor={'department'}>Department</label>
          <select
            id={'department'}
            name={'department'}
            value={getValue('department')}
            onChange={handleChange}
          >
            <option value={'Sales'}>Sales</option>
            <option value={'Marketing'}>Marketing</option>
            <option value={'Engineering'}>Engineering</option>
            <option value={'Human Resources'}>Human Resources</option>
            <option value={'Legal'}>Legal</option>
          </select>
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
