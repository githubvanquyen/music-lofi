import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
const Clock = () => {
  const [value, setValue] = React.useState(new Date() || null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} xs={{borderRadius: '20px'}}>
      <StaticTimePicker
        ampm
        orientation="landscape"
        openTo="minutes"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params}/>}
      />
    </LocalizationProvider>
  );
}

export default Clock;