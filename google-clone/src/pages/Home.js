import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from '../components/Search';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home-header'>
          <div className='home-header-left'>
            <Link to='/about'>About</Link>
            <Link to='/store'>Store</Link>
          </div>
          <div className='home-header-right'>
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <AppsIcon />
            <Avatar />


          </div>
        </div>
        <div className='home-body'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' alt='' />

          <div className='home-inputContainer'>
            <Search  />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home