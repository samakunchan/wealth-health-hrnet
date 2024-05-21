import './index.css';

const ModalComponent = ({ message = `Employee Created!` }) => {
  // const dispatch = useDispatch();
  // const isUserFormActive = useSelector(selectUserForm);
  //
  // const openModal = () => {
  //   dispatch(toogleUserForm(!isUserFormActive));
  // };
  //
  // const closeModal = () => {
  //   dispatch(toogleUserForm(false));
  // };
  return (
    <div id='confirmation' className='modal'>
      {message}
    </div>
  );
};

export default ModalComponent;
