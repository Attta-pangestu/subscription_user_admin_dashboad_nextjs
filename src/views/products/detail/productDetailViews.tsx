"use client"

import { ProductData } from '@/data/productsdata';
import Image from 'next/image'
import React from 'react'
import InputGroup from '@/components/inputGroup/InputGroup'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import Select from '@/components/select/Select'
import Form from '@/components/form/Form'

const ProductDetailViews = ({productsData}: {productsData: ProductData}) => {
  const [data, setData] = React.useState(productsData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  const handleChangeSelect = (name: string, value: string) => {
    setData({
      ...data,
      [name]: value
    });
  }

  const handleSubmit = () => {
    console.log(data);
  }

  return (
    <DashboardLayout>
      <div style={{padding: '1rem', display: 'flex', gap: '1rem'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
            <Image src={data.img === 'none' ? '/images/noproduct.jpg' : data.img} alt="user" width={200} height={200} style={{borderRadius: '50%'}} />
            <h3>{data.title}</h3>
          </div>
          <Form action="" onSubmit={handleSubmit}  styles={{display: 'flex', flexWrap: 'wrap',  justifyContent: 'space-between'}}>
            <InputGroup
              handleChange={handleChange}
              data={[
                {
                  type: 'hidden',
                  placeholder: '',
                  name: 'id',
                  required: false,
                  value: data.id,
                  width: '45%'
                },
                {
                  type: 'text',
                  placeholder: 'Title',
                  name: 'title',
                  required: true,
                  value: data.title,
                  width: '45%'
                },
                {
                  type: 'text',
                  placeholder: 'Price',
                  name: 'price',
                  required: true,
                  value: data.price,
                  width: '45%'
                },
                {
                  type: 'text',
                  placeholder: 'Color',
                  name: 'color',
                  required: false,
                  value: data.color,
                  width: '45%'
                },
                {
                  type: 'date',
                  placeholder: 'Created At',
                  name: 'created_at',
                  required: false,
                  value: data.created_at,
                  width: '45%'
                },
                {
                  type: 'number',
                  placeholder: 'Stock',
                  name: 'stock',
                  required: true,
                  value: data.stock,
                  width: '45%'
                },
              ]}
            />
            <Select 
              name="status" 
              id="status" 
              width={'45%'} 
              value={data.status.toString()}
              options={[
                  {value: "nonactive", label: "Not Active"},
                  {value: "active", label: "Active"},
              ]} 
              onChange={(e) => handleChangeSelect(e.target.name, e.target.value)}
            /> 
            <textarea name="description" id="description" rows={16} placeholder='Product Description' defaultValue={data.desc}></textarea>
            <button type="submit" >Edit</button>
          </Form>
      </div>
    </DashboardLayout>
  )
}

export default ProductDetailViews
