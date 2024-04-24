import React from 'react'
import style from './topNav.module.css'
import SearchBar from '../searchBar/SearchBar'
import Link from 'next/link'
import Button from '../button/Button'

const TopNav = ({placeholder, path, title} : {placeholder: string, path: string, title: string}) => {
  return (
    <div className={style.top}>
        <SearchBar placeholder="Search for a user"/>
        <Link href="/dashboard/users/add">
        <Button className={style.button}> Add User</Button>
        </Link>
  </div>
  )
}

export default TopNav
