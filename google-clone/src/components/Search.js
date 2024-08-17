import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';

const Search = () => {
    return (
        <div className='search'>
            <div className='search-input'>
                <SearchIcon className='search-inputIcon' />
                <input />
                <MicIcon />
            </div>
            <div className='search-buttons'>
                <Button variant='outlined'>Google Search Button</Button>
                <Button variant='outlined'>I'm feeling lucky</Button>
            </div>
        </div>
    )
}

export default Search