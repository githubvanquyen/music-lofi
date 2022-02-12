
import Typography from '@mui/material/Typography';
import React from 'react';

const Alert = ({message}) => {
  return (
      <Typography component="h5" sx={{color: 'red', textAlign: 'center'}}>
          {message}
      </Typography>
  )
};

export default Alert;
