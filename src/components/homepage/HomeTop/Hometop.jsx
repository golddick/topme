import './hometop.scss'
import SearchIcon from '@mui/icons-material/Search';
// import Logo from '../../../assets/logo.png'
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
          {/* <img src={Logo} alt="" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="174" height="49" viewBox="0 0 174 49" fill="none">
  <path d="M40.4396 48.7149C31.1212 48.7149 23.5474 41.1139 23.5474 31.7783C23.5474 22.4427 31.1284 14.8418 40.4396 14.8418C49.7508 14.8418 57.3318 22.4427 57.3318 31.7783C57.3318 41.1139 49.7508 48.7149 40.4396 48.7149ZM40.4396 21.0607C34.5456 21.0607 29.75 25.8689 29.75 31.7783C29.75 37.6878 34.5456 42.4959 40.4396 42.4959C46.3336 42.4959 51.1292 37.6878 51.1292 31.7783C51.1292 25.8689 46.3336 21.0607 40.4396 21.0607Z" fill="white"/>
  <path d="M82.5875 33.8731C73.2692 33.8731 65.6953 26.2721 65.6953 16.9365C65.6953 7.60093 73.2764 0 82.5875 0C91.8987 0 99.4798 7.60093 99.4798 16.9365C99.4798 26.2721 91.8987 33.8731 82.5875 33.8731ZM82.5875 6.21894C76.6936 6.21894 71.898 11.0271 71.898 16.9365C71.898 22.846 76.6936 27.6541 82.5875 27.6541C88.4815 27.6541 93.2771 22.846 93.2771 16.9365C93.2771 11.0271 88.4815 6.21894 82.5875 6.21894Z" fill="white"/>
  <path d="M71.898 17.6201H65.6953V48.7148H71.898V17.6201Z" fill="white"/>
  <path d="M136.954 48.7151H130.005L122.503 33.6644L116.875 40.5455L111.254 33.6644L103.744 48.7151H96.8237L109.99 22.3062L116.875 30.742L123.781 22.3062L136.954 48.7151Z" fill="white"/>
  <path d="M11.0342 48.7149C8.75122 48.7149 5.48477 48.2902 3.0439 46.2245C1.65835 45.0512 0 42.8631 0 39.1418V1.43945H6.20267V39.1418C6.20267 40.5885 6.67649 41.1644 7.03544 41.4667C8.38509 42.6255 11.4146 42.5823 12.6638 42.3808L13.6832 48.5134C13.4319 48.5566 12.4125 48.7149 11.027 48.7149H11.0342Z" fill="white"/>
  <path d="M16.2603 15.9502H2.18945V22.1691H16.2603V15.9502Z" fill="white"/>
  <path d="M116.939 22.2846C111.526 22.2846 107.118 17.8651 107.118 12.438C107.118 7.01079 111.526 2.59131 116.939 2.59131C122.352 2.59131 126.76 7.01079 126.76 12.438C126.76 17.8651 122.352 22.2846 116.939 22.2846ZM116.939 3.6278C112.093 3.6278 108.152 7.57942 108.152 12.438C108.152 17.2965 112.093 21.2481 116.939 21.2481C121.785 21.2481 125.726 17.2965 125.726 12.438C125.726 7.57942 121.785 3.6278 116.939 3.6278Z" fill="#68EDCB"/>
  <path d="M126.243 13.9926C125.389 13.9926 124.692 13.2944 124.692 12.4378C124.692 8.14792 121.218 4.66416 116.939 4.66416C112.66 4.66416 109.186 8.14792 109.186 12.4378C109.186 13.2944 108.489 13.9926 107.635 13.9926C106.781 13.9926 106.084 13.2944 106.084 12.4378C106.084 6.43483 110.952 1.55469 116.939 1.55469C122.926 1.55469 127.794 6.43483 127.794 12.4378C127.794 13.2944 127.097 13.9926 126.243 13.9926Z" fill="#68EDCB"/>
  <path d="M172.864 29.5255C171.773 21.0968 164.551 14.7339 156.065 14.7339C146.725 14.7339 139.123 22.3564 139.123 31.7208C139.123 41.0852 146.725 48.7077 156.065 48.7077C160.179 48.7077 164.141 47.2106 167.228 44.497L168.04 43.7844L164.027 39.185L163.215 39.8976C161.234 41.6322 158.7 42.5896 156.072 42.5896C151.234 42.5896 146.955 39.2713 145.641 34.6935H172.778L172.893 33.7434C172.972 33.0884 173.015 32.4046 173.015 31.7208C173.015 30.9866 172.964 30.2452 172.871 29.5183L172.864 29.5255ZM145.677 28.5825C147.034 24.0335 151.219 20.8521 156.065 20.8521C160.911 20.8521 165.089 24.0335 166.453 28.5825H145.684H145.677Z" fill="white"/>
</svg>
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