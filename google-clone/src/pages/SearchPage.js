import React, { useContext } from 'react'
import './SearchPage.css'
import { AppContext } from '../Context/AppContext';
import response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//https://developers.google.com/custom-search/v1/introduction?hl=tr#identify_your_application_to_google_with_api_key
//https://developers.google.com/custom-search/v1/using_rest?hl=tr
//https://programmablesearchengine.google.com/controlpanel/create

const SearchPage = () => {
    const context = useContext(AppContext);
    // const { result } = useContext(AppContext);
    const responseData = response;
    return (
        <div className='searchPage'>
            <div className='searchPage-header'>
                <Link to='/'>
                    <img className='searchPage-logo' src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' alt='' />
                </Link>
                <div className='searchPage-headerBody'>
                    <Search hiddenButtons />
                    <div className='searchPage-options'>
                        <div className='searchPage-optionsLeft'>
                            <div className='searchPage-option'>
                                <SearchIcon />
                                <Link to="/all">all</Link>
                            </div>
                            <div className='searchPage-option'>
                                <DescriptionIcon />
                                <Link to="/news">news</Link>
                            </div>
                            <div className='searchPage-option'>
                                <ImageIcon />
                                <Link to="/images">images</Link>
                            </div>
                            <div className='searchPage-option'>
                                <LocalOfferIcon />
                                <Link to="/shopping">shopping</Link>
                            </div>
                            <div className='searchPage-option'>
                                <RoomIcon />
                                <Link to="/maps">maps</Link>
                            </div>
                            <div className='searchPage-option'>
                                <MoreVertIcon />
                                <Link to="/more">more</Link>
                            </div>
                        </div>
                        <div className='searchPage-optionsRight'>
                            <div className='searchPage-option'>
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className='searchPage-option'>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='searchPage-results'>
                <p className='searchPage-resultCount'>
                    About {responseData?.searchInformation.formattedTotalResults} results ({responseData?.searchInformation.formattedSearchTime} seconds) for {context.input}
                </p>
                {responseData?.items.map(item => (
                    <div className='searchPage-result' key={item.cacheId}>
                        <a href={item.link}>
                            {item.pagemap?.cse_image?.length > 0 &&
                                item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage__resultImage"
                                        src={
                                            item.pagemap?.cse_image?.length > 0
                                            && item.pagemap?.cse_image[0]?.src
                                        }
                                        alt=""
                                    />
                                )}
                            {item.displayLink}
                        </a>
                        <a className='searchPage-resultTitle' href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className='searchPage-resultSnippet'>
                            {item.snippet}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchPage