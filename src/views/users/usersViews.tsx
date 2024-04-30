import React from 'react'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import style from './usersViews.module.css'
import { UserInfo } from '../../data/userInfoData';
import Pagination from '@/components/pagination/Pagination';
import TopNav from '@/components/top-nav/TopNav';
import TableGroup from '@/components/tableGroup/TableGroup';
import { transformData } from '@/service/dataManipulation';
  

type UserProps = {
  usersData: UserInfo[]
}


const UsersViews = ({usersData} : UserProps) => {
  const users : Array<Array<string>> = transformData(usersData, 'user');
  return (
    <DashboardLayout>
      <div className='container'>
        <TopNav title="users"/>
        <div className={style.tableUsers}>
          <TableGroup
            thead={['', 'Name',  'Email', 'Created At', 'Role', 'status',  'Action']}
            data={users}
            tableName='users'
          />
          <Pagination />
        </div>
      </div>
      
    </DashboardLayout>
  )
}

export default UsersViews
