import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Calender() {
  const [value, setValue] = React.useState(null);

  const renderInput = ({ inputRef, inputProps }) => {
    return (
      <input
      style={{background:'red'}}
        ref={inputRef}
        {...inputProps}
        placeholder="Select a date"
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} >
        <DatePicker
          renderInput={renderInput}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default Calender;