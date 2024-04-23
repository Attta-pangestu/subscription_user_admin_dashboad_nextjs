import React from 'react'
import style from './pagination.module.css'
import Button from '../button/Button';

const Pagination = () => {
  return (
    <div className={style.container}>
      <Button className={style.button}>Prev</Button>
      <Button className={style.button}>Next</Button>
    </div>
  )
}


export default Pagination
