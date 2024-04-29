import React from 'react'
import style from './button.module.css'


type ButtonProps = {
  children: React.ReactNode, 
  className?: string, 
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({children, className, onClick, type}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={` ${className} ${style.button}`}>
        {children}
    </button>
  )
}

export default Button
