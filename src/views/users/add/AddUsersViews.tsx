import React from 'react'
import style from './addUsersViews.module.css'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import Form from '@/components/form/Form'
import Input from '@/components/input/Input'
import Select from '@/components/select/Select'
import InputGroup from '@/components/inputGroup/InputGroup'
import { addUser } from '@/service/formAction'

const AddUsersViews = () => {


  return (
    <DashboardLayout>
        <div className={style.container}>
          <Form action={addUser} >
          <InputGroup data={[
                  {type: "text", placeholder: 'Username', name: "username", width: "45%"},
                  {type: "email", placeholder: 'Email', name: "email", width: "45%"},
                  {type: "password", placeholder: 'Password', name: "password", width: '32%', required:true},
                  {type: "phone", placeholder: 'Phone', name:'phone', width: '32%'}, 
                  {type: "text", placeholder:'Image URL', name:'img', width: '32%'}

                ]}/>
                <Select 
                  name="role" 
                  id="role" 
                  width={'45%'} 
                  options={
                    [
                      {value: "user", label: "Choose role?"}, 
                      {value: "admin", label: "Admin"},
                      {value: "user", label: "User"}
                    ]}  />
                <Select 
                  name="status" 
                  id="status" 
                  width={'45%'} 
                  options={
                    [
                      {value: "passive", label: "Status ?"}, 
                      {value: "active", label: "Active"},
                      {value: "passive", label: "Passive"}
                    ]}  />
                <textarea name="address" id="address" rows={16} placeholder='Address' ></textarea>
                <button type='submit'>Submit</button>
          </Form>
        </div>
    </DashboardLayout>
  )
}

export default AddUsersViews