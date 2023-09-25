import React from 'react'
import { Button, TextField } from '@mui/material';

function ThirdStep() {
  return (
    <div style={{ textAlign: "center" }}>
      <div><TextField label='City' margin='normal' variant='outlined' color='primary' /></div>
      <div><TextField label='LandMark' margin='normal' variant='outlined' color='primary' /></div>
      <div><TextField label='Postal Code' margin='normal' variant='outlined' color='primary' /></div>
      <Button variant='contained' color='secondary'>Done</Button>
    </div>
  )
}

export default ThirdStep