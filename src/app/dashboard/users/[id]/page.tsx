"use server"

import React from 'react'
import UserDetailViews from '@/views/users/detail/userDetailViews'
import { fetchUserById } from '@/service/dbService'
const page = async ({ params } : { params: { id: string } }) => {
    const id = params.id
    const userDataById = await fetchUserById(id)
    return (
        userDataById ? <UserDetailViews usersData={userDataById} /> : 
        <div>data not found</div>
    )
    
}

export default page