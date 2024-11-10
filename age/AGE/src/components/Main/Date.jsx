import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';



/*  */

function DatePickerComponent({ nom, selectedDate, onDateChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={nom}
        value={selectedDate}
        onChange={onDateChange}
        renderInput={(params) => <TextField {...params} variant="filled" color="secondary" />}
        
      />
    </LocalizationProvider>
  );
}

DatePickerComponent.propTypes = {
  nom: PropTypes.string.isRequired,
  selectedDate: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DatePickerComponent;
