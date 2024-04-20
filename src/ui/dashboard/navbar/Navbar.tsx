import React from 'react'
import style from './navbar.module.css'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const PathTitle = () => {
  return(
    <div>
       <span className={style.pageTitle}>Dashboard </span> 
        <span>&gt;</span> 
    </div>
  );
}

const Navbar = () => {
  return (
    <div className={style.container}>
      <PathTitle/>

      <div className={style.menu}>
        <div className={style.searchBar}>
          <MdSearch />
          <input type="text" placeholder="Search" />
        </div>
          <MdOutlineChat/>
          <MdNotifications/>
          <MdPublic/>
      </div>
    </div>
  )
}

export default Navbar
