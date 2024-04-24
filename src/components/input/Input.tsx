import React from 'react'
import style from './input.module.css'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
  const { type, placeholder, name, required, ...restProps } = props;
  return (
    <input type={type} placeholder={placeholder} name={name} required={required} className={style.input} {...restProps} />
  )
}

export default Input

