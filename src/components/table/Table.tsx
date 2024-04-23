import React from 'react'
import style from './table.module.css'

const Table = ({children, className=''} : {children: React.ReactNode, className?: string}) => {
  return (
    <table className={`${style.table} ${className}`}> 
        {children}
    </table>
  )
}

export default Table