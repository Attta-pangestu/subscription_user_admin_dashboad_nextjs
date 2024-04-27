import React from 'react'
import style from './form.module.css'

type FormProps = {
  children: React.ReactNode, 
  action?: string, 
  className?: string, 
  styles?: React.CSSProperties, 
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({children, action,onSubmit, styles,  className}: FormProps) => {
  return (
    <form action={action} onSubmit={onSubmit}   style={styles} className={`${style.form} ${className}`} >
        {children}
    </form>
  )
}

export default Form