import { UserInfo, usersData } from '@/data/userInfoData'
import { formatedDate } from '@/service/dataManipulation'
import { fetchUsers } from '@/service/dbService'
import UsersViews from '@/views/users/usersViews'
import React from 'react'

const page = async ({searchParams} : {searchParams?: {page?: string, search?: string}}) => {
  const searchQuery = searchParams?.search || ''
  const currentPage = searchParams?.page || 1
  const users : UserInfo[] = await fetchUsers(searchQuery, Number(currentPage))
  return (
    <UsersViews usersData={users} />
  )
}

export default page