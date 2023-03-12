import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DropDown({props,dataHandle,disable}:any) {
  // const [age, setAge] = React.useState('');
  // console.log("props",props);

  const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value as string);
    // console.log("event",event.target.value);
    dataHandle(props.key, event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }} component='div'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label={props.title}
          onChange={handleChange}
          disabled={disable}
        >
          {props.options.map((i:any,j:number)=><MenuItem key={j} value={i}>{i}</MenuItem>)}
          
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}