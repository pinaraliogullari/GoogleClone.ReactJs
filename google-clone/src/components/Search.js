import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const search = (e) => {
        e.preventDefault();
        console.log("I hit the search button");
        navigate(`/search`);

    }
    return (
        <form className='search'>
            <div className='search-input'>
                <SearchIcon className='search-inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            <div className='search-buttons'>
                <Button type='submit' onClick={search} variant='outlined'>Google Search Button</Button>
                <Button variant='outlined'>I'm feeling lucky</Button>
            </div>
        </form>
    )
}

export default Search