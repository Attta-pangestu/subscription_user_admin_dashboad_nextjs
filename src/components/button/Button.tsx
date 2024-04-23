import React from 'react'
import style from './button.module.css'
const Button = ({children, className} : {children: React.ReactNode, className?: string}) => {
  return (
    <button className={`${style.button} ${className}`}>
        {children}
    </button>
  )
}

export default Button
