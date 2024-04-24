import React from 'react'
import style from './formUsers.module.css'
import Input from '@/components/input/Input'
import Select from '@/components/select/Select'
import InputGroup from '@/components/inputGroup/InputGroup'
const FormUsers = () => {
  return (
    <form action="" className={style.form} >
                <InputGroup data={[
                  {type: "text", placeholder: 'Username', name: "username", width: "45%"},
                  {type: "email", placeholder: 'Email', name: "email", width: "45%"},
                  {type: "password", placeholder: 'Password', name: "password", width: '45%', required:true},
                  {type: "phone", placeholder: 'Phone', name:'phone', width: '45%'}
                ]}/>
                <Select 
                  name="isAdmin" 
                  id="isAdmin" 
                  width={'45%'} 
                  options={
                    [
                      {value: "false", label: "Is Admin?"}, 
                      {value: "true", label: "Yes"},
                      {value: "false", label: "No"}
                    ]}  />
                <Select 
                  name="isActive" 
                  id="isActive" 
                  width={'45%'} 
                  options={
                    [
                      {value: "false", label: "Is Active?"}, 
                      {value: "true", label: "Yes"},
                      {value: "false", label: "No"}
                    ]}  />
                <textarea name="address" id="address" rows={16} placeholder='Address' ></textarea>
                <button type='submit'>Submit</button>
    </form>
  )
}

export default FormUsers