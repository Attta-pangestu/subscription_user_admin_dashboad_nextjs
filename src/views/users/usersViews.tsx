import React from 'react'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import style from './usersViews.module.css'
import { UserInfo, usersData } from '../../data/userInfoData';
import Pagination from '@/components/pagination/Pagination';
import TopNav from '@/components/top-nav/TopNav';
import TableGroup from '@/components/tableGroup/TableGroup';
import { transformData } from '../../service/dataManipulation';
  


const UsersViews = () => {
  const users : Array<Array<string>> = transformData(usersData, 'user');
  
  return (
    <DashboardLayout>
      <div className='container'>
        <TopNav title="users"/>
        <div className={style.tableUsers}>
          <TableGroup
            thead={['', 'Name',  'Email', 'Role', 'Created at', 'status',  'Action']}
            data={users}
          />
          <Pagination />
        </div>
      </div>
      
    </DashboardLayout>
  )
}

export default UsersViews
