import './howitworks.scss'
import '../../components/homepage/AngelSelect/Selectoption.scss'
import mobileLogo from '../../assets/blacklogo.svg'
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

    const youtubeLinkUrl = 'https://www.youtube.com/watch?v=MhBYWBu9-9Q';
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
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="21" viewBox="0 0 72 21" fill="none">
            <path d="M16.7074 19.9999C12.8576 19.9999 9.72852 16.8793 9.72852 13.0466C9.72852 9.21383 12.8605 6.09326 16.7074 6.09326C20.5542 6.09326 23.6862 9.21383 23.6862 13.0466C23.6862 16.8793 20.5542 19.9999 16.7074 19.9999ZM16.7074 8.64646C14.2723 8.64646 12.2911 10.6204 12.2911 13.0466C12.2911 15.4727 14.2723 17.4467 16.7074 17.4467C19.1424 17.4467 21.1236 15.4727 21.1236 13.0466C21.1236 10.6204 19.1424 8.64646 16.7074 8.64646Z" fill="#43C4B2"/>
            <path d="M34.1204 13.9066C30.2707 13.9066 27.1416 10.7861 27.1416 6.95331C27.1416 3.12057 30.2736 0 34.1204 0C37.9673 0 41.0993 3.12057 41.0993 6.95331C41.0993 10.7861 37.9673 13.9066 34.1204 13.9066ZM34.1204 2.5532C31.6854 2.5532 29.7042 4.52719 29.7042 6.95331C29.7042 9.37943 31.6854 11.3534 34.1204 11.3534C36.5555 11.3534 38.5367 9.37943 38.5367 6.95331C38.5367 4.52719 36.5555 2.5532 34.1204 2.5532Z" fill="#43C4B2"/>
            <path d="M29.7042 7.23389H27.1416V19.9998H29.7042V7.23389Z" fill="#43C4B2"/>
            <path d="M56.5815 19.9999H53.7105L50.6111 13.8208L48.2858 16.6459L45.9635 13.8208L42.8611 19.9999H40.002L45.4415 9.15771L48.2858 12.6211L51.139 9.15771L56.5815 19.9999Z" fill="#43C4B2"/>
            <path d="M4.55864 19.9998C3.61548 19.9998 2.26598 19.8255 1.25756 18.9773C0.685131 18.4957 0 17.5973 0 16.0695V0.59082H2.56257V16.0695C2.56257 16.6635 2.75832 16.8999 2.90662 17.024C3.46421 17.4998 4.71584 17.4821 5.23191 17.3993L5.65307 19.9171C5.54927 19.9348 5.1281 19.9998 4.55568 19.9998H4.55864Z" fill="#43C4B2"/>
            <path d="M6.71753 6.54834H0.904297V9.10153H6.71753V6.54834Z" fill="#43C4B2"/>
            <path d="M48.3123 9.14858C46.076 9.14858 44.2549 7.33416 44.2549 5.10603C44.2549 2.8779 46.076 1.06348 48.3123 1.06348C50.5486 1.06348 52.3697 2.8779 52.3697 5.10603C52.3697 7.33416 50.5486 9.14858 48.3123 9.14858ZM48.3123 1.48901C46.3103 1.48901 44.682 3.11135 44.682 5.10603C44.682 7.10071 46.3103 8.72305 48.3123 8.72305C50.3143 8.72305 51.9426 7.10071 51.9426 5.10603C51.9426 3.11135 50.3143 1.48901 48.3123 1.48901Z" fill="black"/>
            <path d="M52.1565 5.74457C51.8035 5.74457 51.5158 5.45792 51.5158 5.10627C51.5158 3.34504 50.0803 1.91478 48.3126 1.91478C46.5449 1.91478 45.1094 3.34504 45.1094 5.10627C45.1094 5.45792 44.8217 5.74457 44.4688 5.74457C44.1158 5.74457 43.8281 5.45792 43.8281 5.10627C43.8281 2.64173 45.839 0.638184 48.3126 0.638184C50.7862 0.638184 52.7971 2.64173 52.7971 5.10627C52.7971 5.45792 52.5094 5.74457 52.1565 5.74457Z" fill="black"/>
            <path d="M70.9779 12.2696C70.5627 9.06625 67.8044 6.58398 64.4766 6.58398C60.8611 6.58398 57.9219 9.51543 57.9219 13.1147C57.9219 16.714 60.8611 19.6455 64.4766 19.6455C66.0663 19.6455 67.5997 19.0722 68.795 18.029L67.7213 16.8086C66.8227 17.5917 65.6719 18.0231 64.4766 18.0231C62.0267 18.0231 59.9891 16.2323 59.6125 13.8949H70.9839C71.0165 13.6378 71.0313 13.3777 71.0313 13.1177C71.0313 12.831 71.0135 12.5503 70.975 12.2725L70.9779 12.2696ZM59.6273 12.2696C60.0307 9.9646 62.0534 8.20928 64.4796 8.20928C66.9057 8.20928 68.9285 9.96755 69.3318 12.2696H59.6273Z" fill="#43C4B2" stroke="#43C4B2" strokeMiterlimit="10"/>
          </svg>
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
          <Optiontab/>

          <div className="support">
            <div className="supportLeft">
              <h3>Support Angels: Unleash Impact</h3>
              <p>Our angels drive change by identifying causes, 
                rallying donors, and crafting impactful stories 
                on the TOPME platform. While donations directly 
                aid those in need, angels often face personal expenses. 
                Your support fuels their dedication, covering costs and 
                ensuring their focus remains on making a difference..</p>
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
