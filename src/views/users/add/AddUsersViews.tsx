import React from 'react'
import style from './addUsersViews.module.css'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'

const AddUsersViews = () => {
  return (
    <DashboardLayout>
        <div className={style.container}>
            <form action="" className={style.form} >
                <input type="text" placeholder='Username' name="username" />
                <input type="email" placeholder='Email' name="email" />
                <input type="password" placeholder='Password' name="password" required/>
                <input type="phone" placeholder='Phone' name='phone' />
                <select name="isAdmin" id="isAdmin">
                    <option value="false">Is Admin?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value="false">Is Active?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <textarea name="address" id="address" rows={16} placeholder='Address' ></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </DashboardLayout>
  )
}

export default AddUsersViews