import DashboardLayout from '@/layout/DashboardLayout'
import RightBar from '@/ui/dashboard/righbar/RightBar'
import React from 'react'
import style from './DashboardViews.module.css'

const DashboardViews = () => {
  return (
    <DashboardLayout>
      <div className={style.container}>
          <div className={style.mainDashboard}>
                Dashboard Views
          </div>
          <div className={style.rightBar}>
            <RightBar />
          </div>

      </div>
    </DashboardLayout>
  )
}

export default DashboardViews
