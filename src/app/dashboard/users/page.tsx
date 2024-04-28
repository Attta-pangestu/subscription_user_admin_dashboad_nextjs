import { fetchUsers } from '@/service/dbService'
import UsersViews from '@/views/users/usersViews'
import React from 'react'

const page = async () => {
  const users = await fetchUsers()
  console.log(users)
  return (
    <UsersViews/>
  )
}

export default page