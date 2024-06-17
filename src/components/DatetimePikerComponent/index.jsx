import './index.css';
import {Datepicker} from 'vanillajs-datepicker';
import {useEffect} from 'react';
import 'vanillajs-datepicker/css/datepicker-bulma.css';
import {DateFormat} from '../../core/utils/utils';

/**
 * Composant qui gère l'affichage du datetime picker
 * @param name {string} Nom du name
 * @param setInputs {function} `useState()[1]`
 * @param format {string} Soit `DateFormat.enFormat` ou `DateFormat.frFormat`
 * @return {JSX.Element}
 * @constructor
 */
const DatetimePickerComponent = ({ name, setInputs, format = DateFormat.enFormat }) => {
  useEffect(() => {
    const refInput = document.querySelector(`input[name="${name}"]`);
    const datePicker = new Datepicker(refInput, { autohide: true, todayHighlight: true });

    const eventNameFromVanillajsDatepicker = 'changeDate';

    refInput.addEventListener(eventNameFromVanillajsDatepicker, () => {
      setInputs(values => ({
        ...values,
        [name]: Datepicker.formatDate(datePicker.getDate(), format),
      }));
    });
  }, [name, setInputs, format]);

  return <input type={'text'} id={name} name={name} autoComplete={'off'} />;
};

export default DatetimePickerComponent;
