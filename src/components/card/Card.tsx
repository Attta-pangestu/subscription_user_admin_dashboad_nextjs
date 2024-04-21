import React from 'react';
import style from './card.module.css'

const Card = ({children, className } : {children: React.ReactNode, className?: string}) => {
    return (
      <div className={`${style.cardComp} ${className}`}>
          {children}
      </div>
    );
  }

export default Card;