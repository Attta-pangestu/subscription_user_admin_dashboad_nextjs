"use client"
import { UserInfo } from '@/data/userInfoData'
import Image from 'next/image'
import React from 'react'
import InputGroup from '@/components/inputGroup/InputGroup'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import Select from '@/components/select/Select'
import Form from '@/components/form/Form'

const UserDetailViews = ({usersData} : {usersData: UserInfo}) => {
  const [data, setData] = React.useState(usersData)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(data)

    setData({
      ...data,
      [name]: value
    })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
    
  }

  const handleSubmit = () => {
    console.log(data)
  }
  return (
    <DashboardLayout>
      <div style={{padding: '1rem', display: 'flex', gap: '1rem'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
            <Image src={data.img === 'none' ? '/images/noavatar.png' : data.img} alt="user" width={200} height={200} style={{borderRadius: '50%'}} />
            {data.username}
          </div>
          <Form onSubmit={handleSubmit}  styles={{display: 'flex', flexWrap: 'wrap',  justifyContent: 'space-between'}}>
            <InputGroup
              handleChange={handleChange}
              data={
                [
                {
                  type: 'hidden',
                  placeholder: '',
                  name: 'id',
                  required: false,
                  value: data.id,
                  width: '45%'
                },
                {
                  type: 'text',
                  placeholder: 'Username',
                  name: 'username',
                  required: true,
                  value: data.username,
                  width: '45%'
                },
                {
                  type: 'email',
                  placeholder: 'Email',
                  name: 'email',
                  required: true,
                  value: data.email,
                  width: '45%'
                },
                {
                  type: 'password',
                  placeholder: 'Password',
                  name: 'password',
                  required: true,
                  value: data.password,
                  width: '45%'
                },
                {
                  type: 'phone',
                  placeholder: 'Phone',
                  name: 'phone',
                  required: false,
                  value: data.phone,
                  width: '45%'
                },
                ]
              }
            />
            <Select 
              name="role" 
              id="isAdmin" 
              width={'45%'} 
              value={data.role.toString()}
              options={[
                  {value: "admin", label: "Not Admin"},
                  {value: "user", label: "Admin"},
              ]} 
              onChange={handleSelectChange}
            /> 
            <Select 
              name="status" 
              id="isActive" 
              width={'45%'} 
              value={data.status.toString()}
              options={[
                  {value: "nonactive", label: "Not Active"},
                  {value: "active", label: "Active"},
              ]} 
              onChange={handleSelectChange}

            /> 
            <button type="submit" >Edit</button>
         
          </Form>
          
      </div>
    </DashboardLayout>
  )
}

export default UserDetailViews
