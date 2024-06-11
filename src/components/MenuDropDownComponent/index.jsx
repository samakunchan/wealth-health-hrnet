import './index.css';
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown';

/**
 * Menu dropdown
 * @param name {string} Nom du name
 * @param setInputs {function} `useState()[1]`
 * @param menus {string[]} Liste du menu
 * @param firstText {string} Première entrée. Par défaut "Menus"
 * @return {JSX.Element}
 * @constructor
 */
const MenuDropDownComponent = ({ name, setInputs, menus, firstText = 'Menus' }) => {
  const [menuSelected, setMenuSelected] = useState(firstText);
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toogleMenuKeyboard = event => {
    if (event.key === 'Enter') {
      setIsOpen(!isOpen);
    }
  };

  const selectState = event => {
    const stateName = event.target.textContent;
    if (isOpen) {
      setIsOpen(false);
      setInputs(values => ({
        ...values,
        [name]: stateName,
      }));
      setMenuSelected(stateName);
    }
  };

  useEffect(() => {
    window.addEventListener('click', event => {
      if (isOpen && !event.target.closest('.dropdown')) {
        setIsOpen(false);
      }
    });
  }, [isOpen]);

  return (
    <div className={'dropdown'} tabIndex={0} onClick={toogleMenu} onKeyDown={toogleMenuKeyboard}>
      <p className={'dropbtn state'}>
        <span>{menuSelected}</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </p>
      {isOpen && (
        <div id={'myDropdown'} className={'dropdown-content show'}>
          {menus.map((menu, index) => (
            <span key={index} onClick={selectState}>
              {menu}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuDropDownComponent;
