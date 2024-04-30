import React from 'react'
import style from './select.module.css'

type SelectProps = {
  name: string,
  id: string,
  options: {value: string, label: string}[]
  value?: string,
  width?: string,
  selected?: string, 
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({name, id, options, value, selected,  width, onChange}: SelectProps) => {
  return (
    <select  name={name} id={id}  style={{width: width}} value={value} onChange={onChange} className={style.select}>
      {options.map((option) => (
        <option selected={option.value === selected} key={option.value} value={option.value}  >{option.label}</option>
      ))}
    </select>
  )
}

export default Select

