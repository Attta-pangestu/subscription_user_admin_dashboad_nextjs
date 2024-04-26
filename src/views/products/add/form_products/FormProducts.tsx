import React from 'react'
import style from './formUsers.module.css'
import InputGroup from '@/components/inputGroup/InputGroup'
import Select from '@/components/select/Select'

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
        <Select 
          name="category" id="category" 
          width='45%'
          options={[
            {value:'general', label:'Choose a category'},
            {value:'kitchen', label: 'Kitchen'},
            {value:'phone', label: 'Phone'},
            {value:'computer', label: 'Computer'},
        ]}/>
        <textarea name="description" id="description" rows={16} placeholder='Description'></textarea>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default FormProducts