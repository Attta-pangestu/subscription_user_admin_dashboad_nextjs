import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
  const { type, placeholder, name, required, ...restProps } = props;
  return (
    <input type={type} placeholder={placeholder} name={name} required={required} {...restProps} />
  )
}

export default Input

