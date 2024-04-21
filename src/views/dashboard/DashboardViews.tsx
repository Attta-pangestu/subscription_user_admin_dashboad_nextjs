import DashboardLayout from '@/layout/DashboardLayout'
import RightBar from '@/ui/dashboard/righbar/RightBar'
import React from 'react'
import style from './DashboardViews.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'


const Card = ({children, className } : {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`${style.cardComp} ${className}`}>
        {children}
    </div>
  );
}

const TransactionCard = () => {
  return(
    <Card className={style.transactionCard}>
        <MdSupervisedUserCircle size={24}  />
      <div className={style.transactionContent}>
          <h3>Total Users</h3>
          <span>10.534</span>
        <p><span>10%</span> more than last month</p>
      </div>
    </Card>
  );
}

const TransactionSection = () => {
  return(
    <section className={style.transactionSection}>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
    </section>
  );
}

const DashboardViews = () => {
  return (
    <DashboardLayout>
      <div className={style.container}>
          <div className={style.mainDashboard}>
                <TransactionSection />
          </div>
          <div className={style.rightBar}>
            <RightBar />
          </div>

      </div>
    </DashboardLayout>
  )
}

export default DashboardViews
