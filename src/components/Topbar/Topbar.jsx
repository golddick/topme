import './topbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import {FiFilter} from 'react-icons/fi'
import React, { useState, useEffect, useRef } from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import Logo from '../../assets/Logo.png'



function Topbar() {


  const popupRef = useRef(null);
  const [isPopupOpen, setPopupOpen] = useState(false);


  const handleNotificationClick = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };



  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
  
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isPopupOpen && popupRef.current) {
      popupRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isPopupOpen]);
  
  return (
    <div className='TopBar'>
       <div className="logo">
       <svg xmlns="http://www.w3.org/2000/svg" width="170" height="50" viewBox="0 0 174 50" fill="none">
<path d="M40.4395 48.7149C31.1211 48.7149 23.5472 41.1139 23.5472 31.7783C23.5472 22.4427 31.1283 14.8418 40.4395 14.8418C49.7507 14.8418 57.3317 22.4427 57.3317 31.7783C57.3317 41.1139 49.7507 48.7149 40.4395 48.7149ZM40.4395 21.0607C34.5455 21.0607 29.7499 25.8689 29.7499 31.7783C29.7499 37.6878 34.5455 42.4959 40.4395 42.4959C46.3334 42.4959 51.129 37.6878 51.129 31.7783C51.129 25.8689 46.3334 21.0607 40.4395 21.0607Z" fill="black"/>
<path d="M82.5874 33.8731C73.2691 33.8731 65.6952 26.2721 65.6952 16.9365C65.6952 7.60092 73.2762 0 82.5874 0C91.8986 0 99.4797 7.60092 99.4797 16.9365C99.4797 26.2721 91.8986 33.8731 82.5874 33.8731ZM82.5874 6.21895C76.6934 6.21895 71.8979 11.0271 71.8979 16.9365C71.8979 22.846 76.6934 27.6541 82.5874 27.6541C88.4814 27.6541 93.277 22.846 93.277 16.9365C93.277 11.0271 88.4814 6.21895 82.5874 6.21895Z" fill="black"/>
<path d="M71.8979 17.6201H65.6952V48.7148H71.8979V17.6201Z" fill="black"/>
<path d="M136.954 48.7151H130.005L122.503 33.6644L116.874 40.5455L111.253 33.6644L103.744 48.7151H96.8235L109.99 22.3062L116.874 30.742L123.781 22.3062L136.954 48.7151Z" fill="black"/>
<path d="M11.0342 48.7149C8.75122 48.7149 5.48477 48.2902 3.0439 46.2245C1.65835 45.0512 0 42.8631 0 39.1418V1.43945H6.20267V39.1418C6.20267 40.5885 6.67649 41.1644 7.03544 41.4667C8.38509 42.6255 11.4146 42.5823 12.6638 42.3808L13.6832 48.5134C13.4319 48.5566 12.4125 48.7149 11.027 48.7149H11.0342Z" fill="black"/>
<path d="M16.2605 15.9502H2.18958V22.1691H16.2605V15.9502Z" fill="black"/>
<path d="M116.939 22.2846C111.526 22.2846 107.118 17.8651 107.118 12.438C107.118 7.01078 111.526 2.59131 116.939 2.59131C122.352 2.59131 126.76 7.01078 126.76 12.438C126.76 17.8651 122.352 22.2846 116.939 22.2846ZM116.939 3.6278C112.093 3.6278 108.152 7.57941 108.152 12.438C108.152 17.2965 112.093 21.2481 116.939 21.2481C121.785 21.2481 125.726 17.2965 125.726 12.438C125.726 7.57941 121.785 3.6278 116.939 3.6278Z" fill="#68EDCB"/>
<path d="M126.243 13.9926C125.389 13.9926 124.692 13.2944 124.692 12.4378C124.692 8.14791 121.218 4.66416 116.939 4.66416C112.66 4.66416 109.186 8.14791 109.186 12.4378C109.186 13.2944 108.489 13.9926 107.635 13.9926C106.781 13.9926 106.084 13.2944 106.084 12.4378C106.084 6.43482 110.952 1.55469 116.939 1.55469C122.926 1.55469 127.794 6.43482 127.794 12.4378C127.794 13.2944 127.097 13.9926 126.243 13.9926Z" fill="#68EDCB"/>
<path d="M171.801 29.8853C170.796 22.0828 164.12 16.0366 156.065 16.0366C147.314 16.0366 140.199 23.1769 140.199 31.9439C140.199 40.7108 147.314 47.8511 156.065 47.8511C159.913 47.8511 163.624 46.4547 166.517 43.9139L163.919 40.9412C161.743 42.8486 158.958 43.8995 156.065 43.8995C150.135 43.8995 145.203 39.5376 144.291 33.8441H171.816C171.894 33.2179 171.93 32.5845 171.93 31.9511C171.93 31.2529 171.887 30.5691 171.794 29.8925L171.801 29.8853ZM144.327 29.8853C145.303 24.271 150.199 19.9954 156.072 19.9954C161.944 19.9954 166.84 24.2781 167.817 29.8853H144.327Z" fill="black" stroke="black" strokeWidth="3" strokeMiterlimit="10"/>
</svg>

       </div>
        {/* <div className="topRight">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search"
            className="searchInput"
          />
        </div>
        <FiFilter className="Icon" />
        </div> */}
       
        <div className="topLeft">
          <TurnedInNotOutlinedIcon className="Icon" />
          <div className="icons" onClick={handleNotificationClick}>
            <NotificationsNoneOutlinedIcon className="Icon"   />
            <span className="topbarIconBadge">8</span>
            </div>


            
            {isPopupOpen && (
        <div className="popup" ref={popupRef}>
           <div className="popup-content"> 
             <h3>Notification</h3>
            <p>Today</p>
           <div className="user">
           <div className="avatar">
              <AiOutlineHeart className='icon'/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"/>
            </div>
            <div className="activity">
              <span><b>sam nnamdi</b> liked your post</span>
            </div>
            <span>5 hours ago  &nbsp; <b>.</b> &nbsp; 22 likes</span>
           </div>

           <div className="user">
           <div className="avatar">
              <AiOutlineHeart className='icon'/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"/>
            </div>
            <div className="activity">
              <span><b>sam nnamdi</b> liked your post</span>
            </div>
            <span>5 hours ago  &nbsp; <b>.</b> &nbsp; 22 likes</span>
           </div>


           <div className="user">
           <div className="avatar">
              <AiOutlineHeart className='icon'/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"/>
            </div>
            <div className="activity">
              <span><b>sam nnamdi</b> liked your post</span>
            </div>
            <span>5 hours ago  &nbsp; <b>.</b> &nbsp; 22 likes</span>
           </div>


           <div className="user">
           <div className="avatar">
              <AiOutlineHeart className='icon'/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"/>
            </div>
            <div className="activity">
              <span><b>sam nnamdi</b> liked your post</span>
            </div>
            <span>5 hours ago  &nbsp; <b>.</b> &nbsp; 22 likes</span>
           </div>
          </div> 
         </div>
      )} 
        </div>
    </div>
    
  )
}

export default Topbar

          


