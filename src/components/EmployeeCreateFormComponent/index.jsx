import './index.css';

const EmployeeCreateFormComponent = () => {
  return (
    <div className='employee-create-form'>
      <form action='#' className={'create-employee'}>
        <div className='left-inputs'>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' id='first-name' />

          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' />

          <label htmlFor='date-of-birth'>Date of Birth</label>
          <input id='date-of-birth' type='text' />

          <label htmlFor='start-date'>Start Date</label>
          <input id='start-date' type='text' />
        </div>

        <div className='right-inputs'>
          <fieldset className='address form-group'>
            <legend>Address</legend>

            <div>
              <label htmlFor='street'>Street</label>
              <input id='street' type='text' />
            </div>

            <div>
              <label htmlFor='city'>City</label>
              <input id='city' type='text' />
            </div>

            <div className={'flex-colum'}>
              <label htmlFor='state'>State</label>
              <select name='state' id='state'></select>

              <label htmlFor='zip-code'>Zip Code</label>
              <input id='zip-code' type='number' />
            </div>
          </fieldset>
          <br />

          <label htmlFor='department'>Department</label>
          <select name='department' id='department'>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
      </form>

      <button className={'save-btn'}>Save</button>
    </div>
  );
};

export default EmployeeCreateFormComponent;
