import React from 'react'
import style from './addUsersViews.module.css'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import Form from './form/Form'

const AddUsersViews = () => {
  return (
    <DashboardLayout>
        <div className={style.container}>
            <Form />
        </div>
    </DashboardLayout>
  )
}

export default AddUsersViews