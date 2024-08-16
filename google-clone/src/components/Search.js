import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Search = () => {
    return (
        <div className='search'>
            <div className='search-input'>
                <SearchIcon className='search-inputIcon' />
                <input />
                <MicIcon />
            </div>
        </div>
    )
}

export default Search