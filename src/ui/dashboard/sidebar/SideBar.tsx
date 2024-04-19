import React from 'react'
import style from './sideBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { MdDashboard, MdMonetizationOn, MdPeople, MdShoppingCart } from 'react-icons/md'


// component
const UserProfile = () => {
  return (
    <div className={style.userProfile}>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="user" width={50} height={50} className={style.userImage} />
  <div className={style.userInfo}>
    <span className={style.userName}>Username</span>
    <span className={style.userRole}>Role</span>
  </div>
</div>
  )
}

const MenuItem = ({path, title, icon} : {path: string, title: string, icon: React.ReactNode}) => {
  return(
    <Link href={path} className={style.menuLink}>
      {icon}
      {title}
    </Link>
  )
}

const SideBar = () => {
  const menuItems = [
    {
      title: 'pages', 
      menuList: [
        {
          title: 'Dashboard',
          path: '/dashboard', 
          icon: <MdDashboard/>
        },
        {
          title: 'Users',
          path: '/dashboard/users',
          icon: <MdPeople />
        },
        {
          title: 'Products',
          path: '/dashboard/products',
          icon: <MdShoppingCart />
        },
        {
          title: 'Transactions',
          path: '/dashboard/transactions',
          icon: <MdMonetizationOn />
        }
      ]
    }
  ]
  

  return (
    <div>
     <UserProfile />
      <ul>
        <li>
          
        </li>
      </ul>
    </div>
  )
}

export default SideBar


