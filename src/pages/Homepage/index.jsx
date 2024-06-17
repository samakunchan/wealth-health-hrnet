import EmployeeCreateFormComponent from '../../components/EmployeeCreateFormComponent';
import NavigateToEmployeeListComponent from '../../components/NavigateToEmployeeListComponent';
import { RouteName } from '../../core/utils/utils';
import TitleComponent from '../../components/TitleComponent';

const HomePage = () => {
  return (
    <section>
      <div className={'container'}>
        <div className={'flex-align'}>
          <TitleComponent />
          <NavigateToEmployeeListComponent to={RouteName.listEmployee} />
        </div>
        <EmployeeCreateFormComponent />
      </div>
    </section>
  );
};

export default HomePage;
