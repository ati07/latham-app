import { Box } from '@mui/system'
import { TextField } from '@mui/material'
import React from 'react'

function Input({props,dataHandle,disable}:any) {
  console.log("propsInp",props);
  const handleChange=(event:any)=>{
    // console.log("event",event.target.value);
    dataHandle(props.key, event.target.value)
  }
  return (
    <Box sx={{ minWidth: 120 }} component='div'>
      <TextField value={props.value} 
      id="standard-basic" 
      label={props.title} 
      variant="outlined" 
      onChange={handleChange} 
      fullWidth
      disabled={disable} />
    </Box>
  )
}

export default Input