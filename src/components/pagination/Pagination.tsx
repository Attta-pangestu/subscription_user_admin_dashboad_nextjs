"use client"

import React from 'react'
import style from './pagination.module.css'
import Button from '../button/Button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  currentPage: number
}

const Pagination = () => {
  const pathname = usePathname()
  const {replace} = useRouter()
  const searchParams = useSearchParams()
  
  const params = new URLSearchParams(searchParams.toString())

  const currentPage = Number(searchParams?.get('page')) || 1
  const query = searchParams?.get('search') || ''
  
  function handleNextPage () {
    params.set('page', String(currentPage + 1))
    params.set('search', query)
    replace(`${pathname}?${params.toString()}`)
  }

  function handlePrevPage () {
    params.set('page', String(currentPage - 1))
    params.set('search', query)
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <div className={style.container}>
      <Button onClick={handlePrevPage} className={style.button}>Prev</Button>
      <Button onClick={handleNextPage} className={style.button}>Next</Button>
    </div>
  )
}


export default Pagination
