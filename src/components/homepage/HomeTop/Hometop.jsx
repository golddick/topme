import './hometop.scss'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../../assets/logo.png'
import {  NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Search from '../../search/Search';
import ErrorBoundary from '../../errboundary';


function Hometop() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsOpen(true);
  };

    // Function to close the popup
    function closePopup() {
      setIsOpen(false);
    }
  


  return (
    <div className="tophome">
        <div className="topLeft">
          <span>about</span>
          <span>faq</span>
          <span>how it works </span>

          <div className="search"  onClick={handlePopupOpen}>
            <SearchIcon className='searchicon'/>
            <span>search</span>
          </div>
        
        </div>

        <div className="topcenter">
          <img src={Logo} alt="" />
        </div>

        <div className="topRight">
        <NavLink to='/login' className='navlink'>
          <span>Login</span>
          </NavLink>
          <NavLink to='/signup' className='navlink'>
          <span className='sign-up' > angle sign up</span>
          </NavLink>
        </div>
        {isOpen && (
          <div className="popup">
            <ErrorBoundary>
            <Search closePopup={closePopup} />
            </ErrorBoundary>
          </div>
        )}
      </div>
  )
}

export default Hometop