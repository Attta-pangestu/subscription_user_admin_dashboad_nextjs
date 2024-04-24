import React from 'react'
import style from './addUsersViews.module.css'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import FormUsers from './form_users/FormUsers'

const AddUsersViews = () => {
  return (
    <DashboardLayout>
        <div className={style.container}>
            <FormUsers />
        </div>
    </DashboardLayout>
  )
}

export default AddUsersViews