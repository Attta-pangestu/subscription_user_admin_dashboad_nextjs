import React from 'react'; 
import {MdSearch} from 'react-icons/md'
import style from './searchBar.module.css';

const SearchBar = ({placeholder} : { placeholder: string}) => {
    return(
        <div className={style.searchBar}>
            <MdSearch />
            <input type='search' placeholder={placeholder} />
        </div>
    )
}

export default SearchBar;
