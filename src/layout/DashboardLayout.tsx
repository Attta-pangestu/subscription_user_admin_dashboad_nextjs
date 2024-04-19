import Navbar from '@/ui/dashboard/navbar/Navbar';
import SideBar from '@/ui/dashboard/sidebar/SideBar'
import React from 'react'
import style from './dashboardLayout.module.css'
const DashboardLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <SideBar />
      </div>
      <div className={style.content} >
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout; 

