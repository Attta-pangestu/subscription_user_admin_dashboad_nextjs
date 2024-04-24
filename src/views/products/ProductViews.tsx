import React from 'react'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import style from './productViews.module.css'
import SearchBar from '@/components/searchBar/SearchBar'
import Link from 'next/link'
import Button from '@/components/button/Button'
import Table from '@/components/table/Table'
import Image  from 'next/image';
import Pagination from '@/components/pagination/Pagination'
import { productsData } from '@/data/productsdata'

const ProductsViews = () => {
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
                <td>Title</td>
                <td>Description</td>
                <td>Price</td>
                <td>Created at</td>
                <td>Stock</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {productsData.map((data, index) => (
                <tr key={index}>
                  <td><Image src="/images/noproduct.jpg" alt="user" width={35} height={35} style={{borderRadius: '50%'}} /></td>
                  <td>{data.title}</td>
                  <td style={{maxWidth: '200px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{data.desc}</td>
                  <td>{data.price}</td>
                  <td>{data.created_at}</td>
                  <td>{data.stock}</td>
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

export default ProductsViews
