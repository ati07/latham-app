import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

export default function Date({props,dataHandle,disable}:any) {
  const handleChange=(newValue:any) => {
    dataHandle(props.key, newValue.toISOString().split('T')[0])
    // console.log("newValue",newValue.toISOString().split('T')[0]);
    
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} >
        <DatePicker label={props.title} 
          value={dayjs(props.value)}
          onChange={handleChange} disabled={disable}
          
          />
          
      </DemoContainer>
    </LocalizationProvider>
  );
}