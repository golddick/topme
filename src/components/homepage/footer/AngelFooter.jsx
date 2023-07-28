import './footerangel.scss'
import Logo from '../../../assets/Logo.png'
import {BsYoutube , BsInstagram , BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import React, { useState } from 'react';

function AngelFooter() {

  const [isOpen, setIsOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsOpen(true);
  };

  const handlePopupClose = () => {
    setIsOpen(false);
  };



  return (
    <div className='AngelFooter'>
      <div className="footerWrapper">
        <div className="left">
          <img src={Logo} alt="" />
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
      {isOpen && (
        <div className="popup">
          <div className="popupContent">
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
         <div className="contentCenter">
         <p>Please insert your Email address</p>
            <input type="email" name="email" id="" placeholder='input email' />
           <div className="subscribedAngels">
           <div className="subscribers">
              <img src="https://truthshare.com.ng/wp-content/uploads/2020/06/people-1492052_1280-1024x681.jpg" alt="" className='image1' />
              <img src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q" alt=""  className='image2' />
              <img src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/271/Africa-2.png" alt=""  className='image3' />
              <img src="https://guardian.ng/wp-content/uploads/2021/08/mental-disorders.jpg" alt=""  className='image4' />
         </div>
               <p>+3,902</p>
              <span>subscribers. </span>
           </div>
            </div>

           <div className="newBtn">
            <button className='subBtn'>subscribe</button>
           <button onClick={handlePopupClose} className='canBtn'>cancel</button>
           </div>
          </div>
        </div>
      )}
      
      <div className="vertical"></div>

      <div className="bottomfooter">
     <span> &copy; TopMe, 2023</span> <span>privacy Policy</span>  
     <span>Cookies policy </span> <span>Terms & condition</span> <span>Legal</span>
      </div>

      </div>
      
  )
}

export default AngelFooter