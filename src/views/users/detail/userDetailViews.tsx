import { UserInfo } from '@/data/userInfoData'
import Image from 'next/image'
import React from 'react'
import InputGroup from '@/components/inputGroup/InputGroup'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import Select from '@/components/select/Select'
import Form from '@/components/form/Form'
import { updateUserAction } from '@/service/formAction'

const UserDetailViews = ({usersData} : {usersData: UserInfo}) => {
  // const [data, setData] = React.useState(usersData)
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   console.log(data)

  //   setData({
  //     ...data,
  //     [name]: value
  //   })
  // }

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { name, value } = e.target
  //   setData({
  //     ...data,
  //     [name]: value
  //   })
    
  // }
  return (
    <DashboardLayout>
      <div style={{padding: '1rem', display: 'flex', gap: '1rem'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
            <Image src={usersData.img === 'none' ? '/images/noavatar.png' : usersData.img} alt="user" width={200} height={200} style={{borderRadius: '50%'}} />
            {usersData.username}
          </div>
          <Form action={updateUserAction}  styles={{display: 'flex', flexWrap: 'wrap',  justifyContent: 'space-between'}}>
            <InputGroup
              data={
                [
                {
                  type: 'hidden',
                  name: 'id',
                  required: false,
                  value: usersData.id as string,
                  width: '45%'
                },
                {
                  type: 'text',
                  name: 'username',
                  placeholder: usersData.username,
                  width: '45%'
                },
                {
                  type: 'email',
                  name: 'email',
                  placeholder: usersData.email,
                  width: '45%'
                },
                {
                  type: 'password',
                  name: 'password',
                  placeholder: usersData.password ? usersData.password : '',
                  width: '45%'
                },
                {
                  type: 'phone',
                  name: 'phone',
                  placeholder: usersData.phone ? usersData.phone : '',
                  width: '45%'
                },
                ]
              }
            />
            <Select 
              selected={usersData.role}
              name="role" 
              id="isAdmin" 
              width={'45%'} 
              options={[
                  {value: "user", label: "Not Admin"},
                  {value: "admin", label: "Admin"},
              ]} 
            /> 
            <Select 
              selected={usersData.status}
              name="status" 
              id="isActive" 
              width={'45%'} 
              options={[
                  {value: "nonactive", label: "Not Active"},
                  {value: "active", label: "Active"},
              ]} 
            /> 
            <button type="submit" >Edit</button>
          </Form>
          
      </div>
    </DashboardLayout>
  )
}

export default UserDetailViews
