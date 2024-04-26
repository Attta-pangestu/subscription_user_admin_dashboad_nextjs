import React from 'react'
import style from './topNav.module.css'
import SearchBar from '../searchBar/SearchBar'
import Link from 'next/link'
import Button from '../button/Button'

const TopNav = ({title} : {title: string}) => {
  return (
    <div className={style.top}>
        <SearchBar placeholder={`Search for a ${title}`}/>
        <Link href={`/dashboard/${title}/add`}>
        <Button className={style.button}> Add {title}</Button>
        </Link>
  </div>
  )
}

export default TopNav
