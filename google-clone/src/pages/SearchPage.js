import React, { useContext } from 'react'
import './SearchPage.css'
import { AppContext } from '../Context/AppContext';

//https://developers.google.com/custom-search/v1/introduction?hl=tr#identify_your_application_to_google_with_api_key
//https://programmablesearchengine.google.com/controlpanel/create

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