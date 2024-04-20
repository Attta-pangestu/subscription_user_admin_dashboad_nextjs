import React from 'react'
import style from './RIghtBar.module.css'
import Image  from 'next/image';

const SideCard = () => {
    return (
        <div className={style.SideCardItem}>
            <div className={style.bgContainer}>
                <Image src="/images/astronaut.png" alt="astronaut"  height={100} width={100}  />
            </div>
            <div className={style.content}>
                <span>🔥 Available Now</span>
                
            </div>
            
        </div>
    );
}


const RightBar = () => {
  return (
    <div className={style.container}>
        <SideCard />
    </div>
  )
}

export default RightBar
