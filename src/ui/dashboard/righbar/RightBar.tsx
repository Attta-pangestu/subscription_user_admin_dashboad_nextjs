import React from 'react'
import style from './RIghtBar.module.css'
import Image  from 'next/image';
import { MdPlayCircleFilled } from 'react-icons/md';

const SideCard = () => {
    return (
        <div className={style.SideCardItem}>
            <div className={style.bgContainer}>
                <Image src="/images/astronaut.png" alt="astronaut"  fill />
            </div>
            <div className={style.content}>
                <span>🔥 Available Now</span>
                <h3>How to use new version of the admin dashboard?</h3>
                <p>Takes 4 minutes to learn</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, distinctio.</p>
                <button className={style.playButton}>
                    <MdPlayCircleFilled/>
                    Watch
                </button>
            </div>
            
        </div>
    );
}


const RightBar = () => {
  return (
    <div className={style.container}>
        <SideCard />
        <SideCard />
    </div>
  )
}

export default RightBar
