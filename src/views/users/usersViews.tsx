import React from 'react'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import style from './usersViews.module.css'
import Link  from 'next/link';
import SearchBar  from '@/components/searchBar/SearchBar';
import Button from '@/components/button/Button';
import Image  from 'next/image';
import { usersData } from '../../data/userInfoData';
import Table from '@/components/table/Table';
import Pagination from '@/components/pagination/Pagination';
  


const UsersViews = () => {
  return (
    <DashboardLayout>
      <div className={style.container}>
        <div className={style.top}>
          <SearchBar placeholder="Search for a user"/>
          <Link href="/dashboard/users/add">
            <Button className={style.button}> Add User</Button>
          </Link>
        </div>
        <div className={style.tableUsers}>
          <Table>
            <thead>
              <tr>
                <td></td>
                <td>Name</td>
                <td>Email</td>
                <td>Created at</td>
                <td>Role</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {usersData.map((data, index) => (
                <tr key={index}>
                  <td><Image src="/images/noavatar.png" alt="user" width={35} height={35} style={{borderRadius: '50%'}} /></td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.created_at}</td>
                  <td>{data.role}</td>
                  <td>{data.status}</td>
                  <td className={style.action}>
                    <Link href="/dashboard/users/edit" >
                      <Button className={style.buttonView}>View</Button>
                    </Link>
                      <form action="">
                          <input type="hidden" name="id" value={data.id} />
                          <Button className={style.buttonDelete}>Delete</Button>
                      </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination />
        </div>
      </div>
      
    </DashboardLayout>
  )
}

export default UsersViews
