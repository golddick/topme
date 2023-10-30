import './footerangel.scss'
import WLogo from '../../../assets/Logo.png'
import DarkLogo from '../../../assets/blacklogo.svg'
import {BsYoutube , BsInstagram , BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import NewsLetter from '../../News-letter/NewsLetter'

function AngelFooter() {

  const [isOpen, setIsOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsOpen(true);
  };

  const handlePopupClose = () => {
    setIsOpen(false);
  }; 
 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  return (
    <div className='AngelFooter'>
     <div className="footer_wrapper">
     <div className="footerWrapper">  
        <div className="left">
          <img src={WLogo} alt="" />
      <div className="fIcons"> 
      <div className="footerIcons">
          <BsYoutube className='icons'/>
          </div>
          <div className="footerIcons">
          <FaFacebookF className='icons'/>
          </div>
          <div className="footerIcons">
          <BsInstagram className='icons'/>
          </div>
          <div className="footerIcons">
          <BsTwitter className='icons'/>
          </div>
      </div>
      <div className="conEmail"><span>contact@topmeangel.com</span></div>
        </div>
        <div className="center">
          <div className="footerLinks">
            <h1>Links</h1>
            <span>Home</span>
            <span>About</span>
            <span>Angels</span>
            <span>Blogs</span>
            <span>Contact Us</span> 
            <span>FAQ</span>
          </div>

          <div className="footerLinks">
            <h1>partner</h1>
            <span>Photoman</span>
            <span>Abuja Diplomat</span>
            <span>BIGWIN</span>
            <span>oneID</span>
            <span> Digital community </span>
            <span>Technology Advisors </span>
          </div>

          <div className="footerLinks">
            <h1>products</h1>
            <span>Become an Angel</span>
            <span>Create Impact Story</span>
          </div>


          <div className="footerLinks">
            <h1>media</h1>
            <span>picture</span>
            <span> video</span>
          </div>

        </div>

        <div className="right">
          <div className="newsletter">
            <h4>subscribe to our newsletter</h4>
            <p>GET UP-TO-DATE INFORMATION ABOUT TOPME AND ITS SERVICES</p>
            <span onClick={handlePopupOpen}>let's start</span>
          </div>

        </div>
       
      </div>

      <div className="vertical"></div>

      <div className="bottom-footer"> 
      <span> &copy; TopMe, 2023</span> <span>privacy Policy</span>  
      <span>Cookies policy </span> <span>Terms & condition</span> <span>Legal</span>
      </div>

     </div>

      {isOpen && (
        <div className="popup">
            <NewsLetter handleClosePopup={handlePopupClose}/>
        </div>
      )}
      

        <div className="mobileFooter">
          <img src={DarkLogo} alt="" />

        <div className="FooterContent">
        <h4>LINKS</h4>
        <NavLink to='/' className='navLink'>
          <span onClick={scrollToTop}>Home</span>
          </NavLink>
          <NavLink to='/about' className='navLink'><span onClick={scrollToTop}>About</span> </NavLink>
          <NavLink to='/impact' className='navLink'><span onClick={scrollToTop}>Angels</span> </NavLink>
          <NavLink to='/blog' className='navLink'><span onClick={scrollToTop}>Blogs</span> </NavLink>
          <NavLink to='/contact' className='navLink'><span onClick={scrollToTop}>Contact Us</span> </NavLink>
          <NavLink to='#' className='navLink'><span onClick={scrollToTop}> FAQ</span></NavLink>
        </div>

        <div className="FooterContent">
        <h4>PARTNERS</h4>
          <span>Photoman</span>
          <span>Abuja Diplomat</span>
          <span>BIGWIG</span>
          <span>oneID</span>
          <span>Technology Advisors</span>
        </div>

        <div className="FooterContent">
        <h4>RESOURCES</h4>
        <NavLink to='/HowitWorks' className='navLink'> <span onClick={scrollToTop}>How it Works</span></NavLink>
        <NavLink to='/pricing' className='navLink'><span  onClick={scrollToTop}>Pricing and Fees</span></NavLink>
        <NavLink to='/guarantee' className='navLink'> <span onClick={scrollToTop}>Guarantee Page</span></NavLink>
        <NavLink to='/profile' className='navLink'><span  onClick={scrollToTop}>profile</span></NavLink>
        <NavLink to='/addProfile' className='navLink'> <span onClick={scrollToTop}>addprofile</span></NavLink>

        </div>

        <div className="bottomContent">
          <div className="top">
          &copy; <span>topme, 2023</span>
          </div>
          <div className="bottomInf">
            <span>privacy policy</span>
            <span>cookie policy</span>
            <span>terms & condition</span>
          </div>
        </div>

        <div className="bottomIcon">
      <div className="footerIcons">
          <BsYoutube className='icons'/>
          </div>
          <div className="footerIcons">
          <FaFacebookF className='icons'/>
          </div>
          <div className="footerIcons">
          <BsInstagram className='icons'/>
          </div>
          <div className="footerIcons">
          <BsTwitter className='icons'/>
          </div>
      </div>
        </div>


   
      </div>
      
  )
}

export default AngelFooter