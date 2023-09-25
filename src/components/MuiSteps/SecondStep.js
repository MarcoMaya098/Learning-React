import React from 'react'
import { Button, TextField } from '@mui/material';

function SecondStep() {
  return (
    <div style={{ textAlign: "center" }}>
        <div><TextField label='Email' margin='normal' variant='outlined' color='primary' /></div>
        <div><TextField label='Country' margin='normal' variant='outlined' color='primary' /></div>
        <div><TextField label='District' margin='normal' variant='outlined' color='primary' /></div>
        <Button variant='contained' color='secondary'>Next</Button>
    </div>
  )
}

export default SecondStep