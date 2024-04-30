import Link from "next/link";
import React from "react";
import style from './pathTitle.module.css'

const PathTitle = ({pathArray} : {pathArray: string[]}) => {
    return(
      <div>
        {pathArray.map((path, index) => (
          <React.Fragment key={index}>
            <Link href={`/${pathArray.slice(0, index+1).join('/')}`} className={style.pageTitle}> {path} </Link> 
            {index < pathArray.length - 1 && <span>&gt;</span>} 
          </React.Fragment>
        ))}
      </div>
    );
  }

export default PathTitle