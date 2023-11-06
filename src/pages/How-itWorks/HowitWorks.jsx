import './howitworks.scss'
import '../../components/homepage/AngelSelect/Selectoption.scss'
import mobileLogo from '../../assets/blacklogo.svg'
import GreenLogo from '../../assets/greenLogo.png'
import {  NavLink } from 'react-router-dom';
import Hometop from '../../components/homepage/HomeTop/Hometop'
import YouTube from 'react-youtube';
import React, { useState } from 'react';
import {BsDot} from 'react-icons/bs'
import { AiFillCaretRight } from 'react-icons/ai';
import AngelFooter from '../../components/homepage/footer/AngelFooter';
import Optiontab from '../../components/Option/Option';


function getVideoIdFromUrl(url) {
    // Extract the video ID from the YouTube URL
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7]) ? match[7] : '';
  }

function HowitWorks( { selectTabColor, innerBoxColor }) {
    const svgColor = selectTabColor === 'red' ? 'white' : 'blue';

    const youtubeLinkUrl = 'https://www.youtube.com/watch?v=0zesotRwEWM&pp=ygUFeW91bmc%3D';
    const videoId = getVideoIdFromUrl(youtubeLinkUrl);

  const opts = { 
    playerVars: {
    controls: 1,
    autoplay: 0,
    },
  };

  return (
    <div className='HowitWorks'>  
        <Hometop/>
         
         <div className="howCont">
          <div className="howHeader">
          <h4>how 
          <img src={GreenLogo} alt=""  className='howIcon' style={{width:'60px', height:'100%', marginTop:'3%', objectFit:'contain'}}/>
            works</h4>
            <div className="mobileHeader">
              <h3>how</h3>
              <img src={mobileLogo} alt="" /> 
              <h3>works</h3>
            </div>
          </div>
 
          <div className="howbody">
            
          <p>TOPMe Angels, the modern-day Good Samaritans, 
            Playing the role of individual NGOs,
             they initiate and lead causes that 
             address pressing needs around them.</p>
           <div className="aboutVideo">
                      <YouTube videoId={videoId} opts={opts} className='youTube'/>
                      </div> 
          
          </div>
          <div className="textHeader">
            <h3>Unleash your inner Angel & make a difference today!</h3>
          </div>
          {/* <div className="_option"> */}
          <Optiontab/>
          {/* </div> */}
          <div className="support">
            <div className="_supportBody"> 
            <div className="supportLeft">
              <h3>Support Angels: Unleash Impact</h3>
              <p>Our angels drive change by identifying causes, 
                rallying donors, and crafting impactful stories 
                on the TOPME platform. While donations directly 
                aid those in need, angels often face personal expenses. 
                Your support fuels their dedication, covering costs and 
                ensuring their focus remains on making a difference.</p> 
            </div>
            <div className="supportRight">
            <div className="supLeft">
              
              <img src="https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-1045045764.jpg?itok=uMgraDCg" alt="" /> 
              <img src="https://journals.healio.com/cms/asset/e7b03e3c-afd6-47a7-98a0-5e14c9bb1f08/10.3928_00989134-19860501-04-fig1.jpg" alt="" /> 
            </div>
       
            <div className="supCenter">
              
              <img src="https://journals.healio.com/cms/asset/e7b03e3c-afd6-47a7-98a0-5e14c9bb1f08/10.3928_00989134-19860501-04-fig1.jpg" alt="" className='imgTop'/> 
              <img src="https://media.istockphoto.com/id/882950106/photo/taking-in-the-views.jpg?s=612x612&w=0&k=20&c=uTI7j4fISHM4_f7ntW35th2XHLEvaV_39vqoMz_z1mk=" alt="" className='imgDown' /> 
            </div>
       
            <div className="supRight">
              
              <img src="https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-1045045764.jpg?itok=uMgraDCg" alt="" className='rightTop' /> 
              <img src="https://media.istockphoto.com/id/882950106/photo/taking-in-the-views.jpg?s=612x612&w=0&k=20&c=uTI7j4fISHM4_f7ntW35th2XHLEvaV_39vqoMz_z1mk=" alt="" className='rightDown'/> 
            </div>
       
            
            </div>
            </div>
          </div>

          <div className="howbottom">
            
           <div className="bottomCenter">
           <h4>Remember, Topme views Angels as individual NGOs, and the platform aims to provide an
               opportunity for people already making efforts to help others in their community. By 
               following these steps, Angels and donors can collaborate to make a meaningful 
               impact and support worthy causes through the Topme crowdfunding platform.</h4>

           </div>
          </div>
         </div>
    <AngelFooter/>
    </div>
  )
}

export default HowitWorks



   
// <div className="howbody">


{/* <p>TOPMe Angels, the modern-day Good Samaritans, Playing the role of
  individual NGOs, they initiate and lead causes 
  that address pressing needs around them.</p> */}


// {/* <div className="aboutVideo">
// <YouTube videoId={videoId} opts={opts} />
// </div>
//  */}
// </div>
