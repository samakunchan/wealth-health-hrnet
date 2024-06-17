import './index.css';

/**
 * Composant pour afficher le titre.
 * @param title
 * @return {JSX.Element}
 * @constructor
 */
const TitleComponent = ({ title = `HRnet` }) => {
  return (
    <div className='title'>
      <h1>{title}</h1>
    </div>
  );
};

export default TitleComponent;
