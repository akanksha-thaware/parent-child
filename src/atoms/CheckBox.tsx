import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
type CheckBoxProps = {
  label: string,
  color: string
}
const CheckBox = ({label, color}: CheckBoxProps) => {
  return (
    <>
    <FormGroup>
    <FormControlLabel control={<Checkbox size="small"/>} label={label}
     style={{ color: color }} />
  </FormGroup>
  </>
  )
}

export default CheckBox