"use client"
import { UserInfo } from '@/data/userInfoData'
import Image from 'next/image'
import React from 'react'
import InputGroup from '@/components/inputGroup/InputGroup'
import { transformData } from '@/service/dataManipulation'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import Select from '@/components/select/Select'
import Form from '@/components/form/Form'

const UserDetailViews = ({usersData} : {usersData: UserInfo}) => {
  const [data, setData] = React.useState(usersData)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value
    })
  }
  console.log(data)

  const handleSubmit = () => {
    console.log(data)
  }
  return (
    <DashboardLayout>
      <div style={{padding: '1rem', display: 'flex', gap: '1rem'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
            <Image src={usersData.img === 'none' ? '/images/noavatar.png' : usersData.img} alt="user" width={200} height={200} style={{borderRadius: '50%'}} />
            {usersData.username}
          </div>
          <Form action="" onSubmit={handleSubmit}  styles={{display: 'flex', flexWrap: 'wrap',  justifyContent: 'space-between'}}>
            <InputGroup
              handleChange={handleChange}
              data={
                [
                {
                  type: 'hidden',
                  placeholder: '',
                  name: 'id',
                  required: false,
                  value: usersData.id,
                  width: '45%'
                },
                {
                  type: 'text',
                  placeholder: 'Username',
                  name: 'username',
                  required: true,
                  value: usersData.username,
                  width: '45%'
                },
                {
                  type: 'email',
                  placeholder: 'Email',
                  name: 'email',
                  required: true,
                  value: usersData.email,
                  width: '45%'
                },
                {
                  type: 'password',
                  placeholder: 'Password',
                  name: 'password',
                  required: true,
                  value: usersData.password,
                  width: '45%'
                },
                {
                  type: 'phone',
                  placeholder: 'Phone',
                  name: 'phone',
                  required: false,
                  value: usersData.phone,
                  width: '45%'
                },
                ]
              }
            />
            
            <Select 
              name="isAdmin" 
              id="isAdmin" 
              width={'45%'} 
              value={usersData.role.toString()}
              options={[
                  {value: "admin", label: "Not Admin"},
                  {value: "admin", label: "Admin"},
              ]} 
            /> 
            <Select 
              name="isActive" 
              id="isActive" 
              width={'45%'} 
              value={usersData.status.toString()}
              options={[
                  {value: "nonactive", label: "Not Active"},
                  {value: "active", label: "Active"},
              ]} 
            /> 
            <button type="submit"   >Edit</button>
          </Form>
          
      </div>
    </DashboardLayout>
  )
}

export default UserDetailViews
