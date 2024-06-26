"use client"
import React from 'react'
import style from './navbar.module.css'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
import SearchBar from '@/components/searchBar/SearchBar'
import { usePathname } from 'next/navigation'
import PathTitle from '../pathTitle/PathTitle'



const NotificationBadge = ({count} : {count: number}) => {
  return (
    count > 0 && (
        <span className={style.notificationBadge}>{count}</span>
    )
  )
}

const Navbar = () => {
  const pathname = usePathname()

  const pathArray = pathname?.split('/')
  pathArray?.shift() 

  return (
    <div className={style.container}>
      <PathTitle pathArray={pathArray} />
      <div className={style.menu}>
        <SearchBar placeholder="Search anything"/>
          <div className={style.notificationIcon}>
            <MdOutlineChat/>
            <NotificationBadge count={3}/>
          </div>
          <div className={style.notificationIcon}>
            <MdNotifications/>
            <NotificationBadge count={5}/>
          </div>
          <div className={style.notificationIcon}>
            <MdPublic/>
            <NotificationBadge count={0}/>
          </div>
      </div>
    </div>
  )
}

export default Navbar
