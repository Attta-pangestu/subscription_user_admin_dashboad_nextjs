import DashboardLayout from '@/layout/DashboardLayout'
import RightBar from '@/ui/dashboard/righbar/RightBar'
import React from 'react'
import style from './DashboardViews.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'
import Image  from 'next/image';


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

const CardTransactionSection = () => {
  return(
    <section className={style.transactionSection}>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
    </section>
  );
}


type TransactionData = {
  name: string;
  userImage: string; 
  status: string;
  date: string;
  amount: string; 
}


const latestTransactionData : TransactionData[] = [
    {
      name: 'Shayna',
      userImage: 'none', 
      status: 'Success',
      date: '14-02-2024',
      amount: '$3.200', 
    }, 
    {
      name: 'Florida',
      userImage: 'none', 
      status: 'Failed',
      date: '05-04-2024',
      amount: '$1.900', 
    }, 
    {
      name: 'Lyric',
      userImage: 'none', 
      status: 'Success',
      date: '22-03-2024',
      amount: '$5.340', 
    }, 
    {
      name: 'Glen',
      userImage: 'none', 
      status: 'Processing',
      date: '16-03-2024',
      amount: '$2.500', 
    }, 
    {
      name: 'Shad',
      userImage: 'none', 
      status: 'Failed',
      date: '02-03-2024',
      amount: '$1.000', 
    }, 
  ]


const TableTransactionSection = () => {
  const statusStyledClass = (status: string) => {
    switch(status) {
      case 'Success':
        return style.success;
      case 'Failed':
        return style.failed;
      case 'Processing':
        return style.processing;
    }
  }
  return (
    <div className={style.transactionTable}>
        <h2>Latest Transaction</h2>
        <table>
          <thead>
            <tr>
              <td>User</td>
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {latestTransactionData.map((data, index) => (
              <tr key={index}>
                <td> <Image src={data.userImage === 'none' ? '/images/noavatar.png' : data.userImage} alt="user" width={35} height={35} style={{borderRadius: '50%'}} /> </td>
                <td>{data.name}</td>
                <td >
                <span className={`${style.status} ${statusStyledClass(data.status)} `}>
                    {data.status}
                </span>

                </td>
                <td>{data.date}</td>
                <td>{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

const DashboardViews = () => {
  return (
    <DashboardLayout>
      <div className={style.container}>
          <div className={style.mainDashboard}>
                <CardTransactionSection />
                <TableTransactionSection />
          </div>
          <div className={style.rightBar}>
            <RightBar />
          </div>

      </div>
    </DashboardLayout>
  )
}

export default DashboardViews
