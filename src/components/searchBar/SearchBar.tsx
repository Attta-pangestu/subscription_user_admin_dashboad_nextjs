"use client"
import React from 'react'; 
import {MdSearch} from 'react-icons/md'
import style from './searchBar.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'; 

const SearchBar = ({placeholder} : { placeholder: string}) => {
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const {replace} = useRouter()

    const handleChange = useDebouncedCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set('page', '1')
            if(e.target.value ) {
                params.set('search', e.target.value)
            }else{
                params.delete('search')
            }
            replace(`${pathName}?${params.toString()}`)
        }, 300
    ) 

    return(
        <div className={style.searchBar}>
            <MdSearch />
            <input onChange={handleChange} type='search' placeholder={placeholder} defaultValue={searchParams?.get('search') ?? ''} />
        </div>
    )
}

export default SearchBar;
