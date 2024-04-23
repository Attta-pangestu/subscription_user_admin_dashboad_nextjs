import React from 'react'
import style from './footer.module.css'
const Footer = () => {
  return (
    <div className={style.container}>
        <span className={style.logo}>Atta Dev</span>
        <span className={style.copyright}> &copy; 2024 All rights reserved </span>
    
    </div>
  )
}

export default Footer