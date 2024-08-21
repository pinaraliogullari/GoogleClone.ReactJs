import React, { useContext } from 'react'
import './SearchPage.css'
import { AppContext } from '../Context/AppContext';
import response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

//https://developers.google.com/custom-search/v1/introduction?hl=tr#identify_your_application_to_google_with_api_key
//https://developers.google.com/custom-search/v1/using_rest?hl=tr
//https://programmablesearchengine.google.com/controlpanel/create

const SearchPage = () => {
    const context = useContext(AppContext);
    const dataa = response;
    console.log(dataa)
    return (
        <div className='searchPage'>
            <div className='searchPage-header'>
                <Link to='/'>
                    <img className='searchPage-logo' src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' alt='' />
                </Link>
                <div className='searchPage-headerBody'>
                    <Search hiddenButtons />
                </div>
            </div>

            <div className='searchPage-results'>

            </div>
        </div>
    )
}

export default SearchPage