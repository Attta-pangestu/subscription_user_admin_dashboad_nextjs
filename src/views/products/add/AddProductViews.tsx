import React from 'react'
import style from './addUsersViews.module.css'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import FormProducts from './form_products/FormProducts'

const AddProductViews = () => {
  return (
    <DashboardLayout>
        <div className={style.container}>
            <FormProducts />
        </div>
    </DashboardLayout>
  )
}

export default AddProductViews