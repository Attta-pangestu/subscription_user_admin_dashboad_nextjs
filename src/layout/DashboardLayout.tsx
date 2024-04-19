import Navbar from '@/ui/dashboard/navbar/Navbar';
import SideBar from '@/ui/dashboard/sidebar/SideBar'
import React from 'react'


const DashboardLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar /> 
      <SideBar />
      {children}
    </div>
  )
}

export default DashboardLayout; 

