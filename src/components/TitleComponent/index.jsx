import './index.css';

const TitleComponent = ({ title = `HRnet` }) => {
  return (
    <div className='title'>
      <h1>{title}</h1>
    </div>
  );
};

export default TitleComponent;
