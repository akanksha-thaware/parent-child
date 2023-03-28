import React from 'react'
import Button from '@mui/material/Button';
type ButtonProps = {
variant: any,
text: string,
icon?: any,
color?: string
}
const ButtonComp = ({variant, text, icon, color}: ButtonProps) => {
  return (
    <>
    <Button sx={{
        width: '100%',
    }} 
    startIcon={icon} 
    style={{color: color}}
    variant={variant}>{text}</Button>
    </>
  )
}

export default ButtonComp