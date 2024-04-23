import React from 'react'
import style from './navbar.module.css'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'
import SearchBar from '@/components/searchBar/SearchBar'

const PathTitle = () => {
  return(
    <div>
       <span className={style.pageTitle}>Dashboard </span> 
        <span>&gt;</span> 
    </div>
  );
}



const NotificationBadge = ({count} : {count: number}) => {
  return (
    count > 0 && (
        <span className={style.notificationBadge}>{count}</span>
    )
  )
}

const Navbar = () => {
  return (
    <div className={style.container}>
      <PathTitle/>
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
