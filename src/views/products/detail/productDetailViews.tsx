import { ProductData } from '@/data/productsdata';
import Image from 'next/image'
import React from 'react'
import InputGroup from '@/components/inputGroup/InputGroup'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import Select from '@/components/select/Select'
import Form from '@/components/form/Form'

const ProductDetailViews = ({productsData}: {productsData: ProductData}) => {
  return (
    <DashboardLayout>
      <div style={{padding: '1rem', display: 'flex', gap: '1rem'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
            <Image src={productsData.img === 'none' ? '/images/noproduct.jpg' : productsData.img} alt="user" width={200} height={200} style={{borderRadius: '50%'}} />
            <h3>{productsData.title}</h3>
          </div>
          <Form action="" styles={{display: 'flex', flexWrap: 'wrap',  justifyContent: 'space-between'}}>
            <InputGroup
              data={
                [
                {
                  type: 'hidden',
                  placeholder: '',
                  name: 'id',
                  required: false,
                  value: productsData.id,
                  width: '45%'
                },
                {
                  type: 'text',
                  placeholder: 'Title',
                  name: 'title',
                  required: true,
                  value: productsData.title,
                  width: '45%'
                },
                {
                  type: 'text',
                  placeholder: 'Price',
                  name: 'price',
                  required: true,
                  value: productsData.price,
                  width: '45%'
                },
                {
                  type: 'text',
                  placeholder: 'Color',
                  name: 'color',
                  required: false,
                  value: productsData.color,
                  width: '45%'
                },
                {
                  type: 'date',
                  placeholder: 'Created At',
                  name: 'created_at',
                  required: false,
                  value: productsData.created_at,
                  width: '45%'
                },
                {
                  type: 'number',
                  placeholder: 'Stock',
                  name: 'stock',
                  required: true,
                  value: productsData.stock,
                  width: '45%'
                },
                ]
              }
            />
            
            
            <Select 
              name="status" 
              id="status" 
              width={'45%'} 
              value={productsData.status.toString()}
              options={[
                  {value: "nonactive", label: "Not Active"},
                  {value: "active", label: "Active"},
              ]} 
            /> 
            <textarea name="description" id="description" rows={16} placeholder='Product Description' defaultValue={productsData.desc}></textarea>
            <button type="submit"  >Edit</button>
          </Form>
      </div>
    </DashboardLayout>
  )
}

export default ProductDetailViews

