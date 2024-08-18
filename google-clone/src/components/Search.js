import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';

const Search = () => {
    const [input, setInput] = useState('');
    const search = (e) => {
        e.preventDefault();
    }
    return (
        <div className='search'>
            <div className='search-input'>
                <SearchIcon className='search-inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            <div className='search-buttons'>
                <Button onClick={search} variant='outlined'>Google Search Button</Button>
                <Button variant='outlined'>I'm feeling lucky</Button>
            </div>
        </div>
    )
}

export default Search