import React from 'react'
import DashboardLayout from '@/layout/Dashboard/DashboardLayout'
import Form from '@/components/form/Form'
import Select from '@/components/select/Select'
import InputGroup from '@/components/inputGroup/InputGroup'

const AddProductViews = () => {
  return (
    <DashboardLayout>
        <div style={{display: 'flex', gap: '1rem', padding: '1rem'}}>
        <Form >
          <InputGroup data={[
                  {type: "text", placeholder: 'Title', name: "title", width: "45%"},
                  {type: "number", placeholder: 'Price', name: "price", width: "45%"},
                  {type: "number", placeholder: 'Stock', name: "stock", width: "45%"},
                  {type: "text", placeholder: 'Color', name: "color", width: "45%"},
                  {type: "text", placeholder: 'Size', name: "size", width: "45%"}
                ]}/>
                <Select 
                  name="category" 
                  id="category" 
                  width={'45%'} 
                  options={[
                      {value: "general", label: "Choose a category"},
                      {value: "kitchen", label: "Kitchen"},
                      {value: "phone", label: "Phone"},
                      {value: "computer", label: "Computer"}
                  ]}  />  
                <textarea name="description" id="description" rows={16} placeholder='Product Description' ></textarea>
                <button type='submit'>Submit</button>
          </Form>
        </div>
    </DashboardLayout>
  )
}

export default AddProductViews