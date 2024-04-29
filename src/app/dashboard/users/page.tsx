import { usersData } from '@/data/userInfoData'
import { formatedDate } from '@/service/dataManipulation'
import { fetchUsers } from '@/service/dbService'
import UsersViews from '@/views/users/usersViews'
import React from 'react'

const page = async () => {
  const users = await fetchUsers()
  const formattedDateUser = users.map((user: any) => {
    return {
      ...user,
      createdAt: formatedDate(user.createdAt)
    }
  })


  console.log(formattedDateUser.map((user: any) => console.log(user)));
  return (
    <UsersViews usersData={usersData} />
  )
}

export default page