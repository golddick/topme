import React, { useState } from 'react';
import './News.scss'

function NewsLetter({ handleClosePopup }) {
    // const [isOpen, setIsOpen] = useState(false);
    
    // const handlePopupClose = () => {
    //     setIsOpen(false);
    // };

    // const handlePopupOpen = () => {
    //     setIsOpen(true);
    // };
 
  return (
    <div className="popupContent">
    <h3>SUBSCRIBE TO OUR NEWSLETTERS</h3>
 <div className="contentCenter">
 <p>Please insert your Email address</p>
   <div className="emailInput"> <input type="email" name="email" id="" placeholder='input email' /></div>
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
 <div className="mobile_center">
  <p>GET UP-TO-DATE INFORMATION ABOUT TOPME AND ITS SERVICES.</p>
 <div className="newsInput">
   <input type="email" name="email" id="" placeholder='Your email' />
   <div className='sub-Btn'>subscribe</div>
   </div>
 </div>
   <div className="newBtn">
    <button className='subBtn'>subscribe</button>
   <button onClick={handleClosePopup} className='canBtn'>cancel</button>
   </div>
  </div>
  )
}

export default NewsLetter