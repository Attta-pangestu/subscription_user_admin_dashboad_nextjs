"use server"

import React from 'react'
import ProductDetailViews from '@/views/products/detail/productDetailViews';
import { ProductData, productsData } from '@/data/productsdata';
const page = ({ params } : { params: { id: string } }) => {
    const id = params.id
    const productData : ProductData | undefined  = productsData.find(product => product.id === id) ;
    
    return (
        productData ? <ProductDetailViews productsData={productData} /> : 
        <div>data not found</div>
    )
    
}

export default page