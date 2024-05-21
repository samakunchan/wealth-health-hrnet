import './index.css';
import EmployeeCreateFormComponent from '../../components/EmployeeCreateFormComponent';
import ModalComponent from '../../components/ModalComponent';
import NavigateToEmployeeListComponent from '../../components/NavigateToEmployeeListComponent';
import { RouteName } from '../../core/utils/utils';
import TitleComponent from '../../components/TitleComponent';

const HomePage = () => (
  <section>
    <div className={'container'}>
      <div className={'flex-align'}>
        <TitleComponent />
        <NavigateToEmployeeListComponent to={RouteName.listEmployee} />
      </div>
      <EmployeeCreateFormComponent />
    </div>
    <ModalComponent />
  </section>
);

export default HomePage;
