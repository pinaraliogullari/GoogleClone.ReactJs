import React, { useContext } from 'react';
import './SearchPage.css';
import { AppContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SearchPage = () => {
    //https://developers.google.com/custom-search/v1/introduction?hl=tr#identify_your_application_to_google_with_api_key
    //https://developers.google.com/custom-search/v1/using_rest?hl=tr
    //https://programmablesearchengine.google.com/controlpanel/create
    const { result, input } = useContext(AppContext);

    return (
        <div className='searchPage'>
            <div className='searchPage-header'>
                <Link to='/'>
                    <img className='searchPage-logo' src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' alt='Google Logo' />
                </Link>
                <div className='searchPage-headerBody'>
                    <Search hiddenButtons />
                    <div className='searchPage-options'>
                        <div className='searchPage-optionsLeft'>
                            <div className='searchPage-option'>
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className='searchPage-option'>
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className='searchPage-option'>
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className='searchPage-option'>
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className='searchPage-option'>
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className='searchPage-option'>
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
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
            {input && result && (
                <div className='searchPage-results'>
                    <p className='searchPage-resultCount'>
                        About {result?.searchInformation?.formattedTotalResults} results ({result?.searchInformation?.formattedSearchTime} seconds) for {input}
                    </p>
                    {result?.items?.map(item => (
                        <div className='searchPage-result' key={item.cacheId}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap.cse_image[0]?.src && (
                                        <img className="searchPage__resultImage"
                                            src={item.pagemap.cse_image[0].src}
                                            alt={item.title}
                                        />
                                    )}
                                <span>{item.displayLink}</span>
                            </a>
                            <a className='searchPage-resultTitle' href={item.link} target="_blank" rel="noopener noreferrer">
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage-resultSnippet'>
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;
