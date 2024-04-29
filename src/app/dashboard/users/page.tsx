import { UserInfo, usersData } from '@/data/userInfoData'
import { formatedDate } from '@/service/dataManipulation'
import { fetchUsers } from '@/service/dbService'
import UsersViews from '@/views/users/usersViews'
import React from 'react'

const page = async () => {
  const users : UserInfo[] = await fetchUsers()
  return (
    <UsersViews usersData={users} />
  )
}

export default page