import React from 'react'
import style from './sideBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdMonetizationOn, MdOutlineSettings, MdPeople, MdShoppingCart } from 'react-icons/md'


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
      title: 'Pages', 
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
    }, 
    {
      title : 'Analytics', 
      menuList: [
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdAttachMoney />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        }
      ]
    }, 
    {
      title: 'User', 
      menuList: [
        {
          title: 'Settings', 
          path: '/dashboard/settings',
          icon: <MdOutlineSettings/>
        }, 
        {
          title: 'Help', 
          path: '/dashboard/help',
          icon: <MdHelpCenter/>
        }
        
      ]
    }

  ]
  

  return (
    <div>
      <UserProfile />
      {menuItems.map((menu) => (
        <div key={menu.title}>
          <hr className={style.menuDivider} />
          <span className={style.menuTitle}>{menu.title}</span>
          <ul>
            {menu.menuList?.map((icon) => (
              <li key={icon.title}>
                <MenuItem path={icon.path} title={icon.title} icon={icon.icon} />
              </li>
            ))}
          </ul>
         
        </div>
      ))}
       <form action="">
            <button className={style.logout}>
              <MdLogout /> Logout
            </button>
          </form>
    </div>

  );
  
}

export default SideBar


