import React, { useState ,useEffect, useRef } from 'react';
import {  NavLink } from 'react-router-dom';
import BLogo from '../../../assets/blacklogo.svg'
import MenuTab from '../menuTab/MenuTab';
import Search from '../../search/Search';
import PostStatus from '../../postLink/PostStatus';
import './visitorNavStatus.scss'
function VisitorNavStatus() {
    const [menuTab, setMenuTab] = useState(false)
    const [openSearch, setSearch] = useState(false)


    const openSearchTab = () => {
        setSearch(!openSearch)  
      }
     
      const closeSearchTab = () => {
        setSearch(false)
        
      } 

      const openMobileMenu = () => {
        setMenuTab(!menuTab)
      }
  
      const closeMobilemenu = () => {
        setMenuTab(false);
      }
  return (
    <div className="mobileVistorTopbar">
    <div className="innerVistorTopbar">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none"  onClick={openSearchTab}>
    <path d="M14.3269 15.04L17.8 18.4M8.8 5.20001C10.7882 5.20001 12.4 6.81178 12.4 8.80001M16.68 9.44001C16.68 13.7699 13.1699 17.28 8.84 17.28C4.51009 17.28 1 13.7699 1 9.44001C1 5.11009 4.51009 1.60001 8.84 1.60001C13.1699 1.60001 16.68 5.11009 16.68 9.44001Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
  </svg>
  <NavLink to='/' className='navLink'>
    <img src={BLogo} alt="" />
    </NavLink>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={openMobileMenu}>
    <path d="M9.8 19.4H21.2M2 12.2H21.2M2 5H21.2" stroke="black" strokeWidth="2" strokeLinecap="round"/>
  </svg>
    </div>
    <PostStatus/>

    {menuTab &&(
     <div className="menushow">
       <MenuTab closeMobilemenu={closeMobilemenu}/>
   
     </div>
    )}
    {openSearch &&(
      <div className="menushow">
      <Search closeSearchTab= {closeSearchTab}/>
      </div>
    )}
   
</div>
  )
}

export default VisitorNavStatus