import React from 'react'
import style from './formUsers.module.css'
import InputGroup from '@/components/inputGroup/InputGroup'

const FormProducts = () => {
  return (
    <form action="" className={style.form} >
        <InputGroup data={[
          
          {type: 'text', placeholder: 'Title', name: 'title', width: '45%', required: true},
          {type: 'number', placeholder: 'Price', name: 'price', width: '45%', required: true},
          {type: 'number', placeholder: 'Stock', name: 'stock', width: '45%', required: true},
          {type: 'color', placeholder: 'Text Color', name: 'textColor', width: '45%', required: false},
          {type: 'number', placeholder: 'Text Size', name: 'textSize', width: '45%', required: false},
        ]} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default FormProducts