import React from 'react'
import TextField from '@mui/material/TextField';
type TextFieldProps = {
  label: string
}
const TextFieldComp = ({label}: TextFieldProps) => {
  return (
    <>
    <p style={{marginBottom: 5, color: 'rgba(0, 0, 0, 0.6)'}}>{label}</p>
    <TextField sx={{
        width: '100%',
    }} size="small" id="outlined-basic" variant="outlined" />
    </>
  )
}

export default TextFieldComp