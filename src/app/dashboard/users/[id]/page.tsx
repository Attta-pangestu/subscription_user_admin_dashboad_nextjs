"use server"

import React from 'react'
import UserDetailViews from '@/views/users/detail/userDetailViews'
import { UserInfo, usersData } from '@/data/userInfoData'
const page = ({ params } : { params: { id: string } }) => {
    const id = params.id
    const userData : UserInfo | undefined  = usersData?.find(user => user.id === params.id) ;
    
    return (
        userData ? <UserDetailViews usersData={userData} /> : 
        <div>data not found</div>
    )
    
}

export default page