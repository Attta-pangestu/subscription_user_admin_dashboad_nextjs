import React from 'react'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import style from './productViews.module.css'
import Pagination from '@/components/pagination/Pagination'
import { productsData } from '@/data/productsdata'
import TopNav  from '@/components/top-nav/TopNav';
import TableGroup from '@/components/tableGroup/TableGroup'
import { transformData } from '@/service/dataManipulation'

const ProductsViews = () => {
  const products : Array<Array<string>> = transformData(productsData, 'product');
  return (
    <DashboardLayout>
      <div className={style.container}>
        <TopNav title="products"/>
        <div className={style.tableUsers}>
          <TableGroup
            thead={['', 'Title', 'Description', 'Price', 'Created at', 'Stock', 'Action']}
            data={products}
            tableName='products'
          />
          
          <Pagination />
        </div>
      </div>
      
    </DashboardLayout>
  )
}

export default ProductsViews
