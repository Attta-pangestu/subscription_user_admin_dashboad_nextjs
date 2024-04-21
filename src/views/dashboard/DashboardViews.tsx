import DashboardLayout from '@/layout/DashboardLayout'
import RightBar from '@/ui/dashboard/righbar/RightBar'
import React from 'react'
import style from './DashboardViews.module.css'
import Image  from 'next/image';
import TransactionCard from '../../ui/dashboard/transaction_card/TransactionCard';
import { latestTransactionData } from '../../data/transactionData';
import CardTransactionSection from './Card_Transaction/TransactionCard.module';
import TableTransactionSection from './Table_Transaction/tableTransaction';
import ChartUser from './Chart_Users/ChartUser';












const DashboardViews = () => {
  return (
    <DashboardLayout>
      <div className={style.container}>
          <div className={style.mainDashboard}>
                <CardTransactionSection />
                <TableTransactionSection />
                <ChartUser/>
          </div>
          <div className={style.rightBar}>
            <RightBar />
          </div>

      </div>
    </DashboardLayout>
  )
}

export default DashboardViews
