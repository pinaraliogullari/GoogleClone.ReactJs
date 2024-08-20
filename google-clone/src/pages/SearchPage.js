import React, { useContext } from 'react'
import './SearchPage.css'
import { AppContext } from '../Context/AppContext';


const SearchPage = () => {
    const context = useContext(AppContext);
    return (
        <div className='searchPage'>
            <div className='searchPage-header'>
                <h1>{context.input}</h1>
            </div>
            <div className='searchPage-results'>

            </div>
        </div>
    )
}

export default SearchPage