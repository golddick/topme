import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './successpage.scss'
import BlackLogo from '../../assets/blacklogo.svg';
import Like from '../../assets/like1.png'


function SuccessPage() {
 

  return (
    <div className="wrapper">
      {/* Add your logo and background images here */}
      <img src={BlackLogo} alt="" className="mobileLogo" />

      <div className="pageBody">
            <img src={Like} alt="" />
            <div className="pageText">
            <h2>Link sent to your Email!</h2>
            <h4>Click the link in your email to complete the registration process on your profile page.</h4>
            </div>
            <NavLink to='/login' className='navLink'>
            <button> 
            Continue to

            <svg xmlns="http://www.w3.org/2000/svg" width="73" height="21" viewBox="0 0 73 21" fill="none">
                <path d="M17.6917 20.0004C13.842 20.0004 10.7129 16.8798 10.7129 13.0471C10.7129 9.21432 13.8449 6.09375 17.6917 6.09375C21.5386 6.09375 24.6706 9.21432 24.6706 13.0471C24.6706 16.8798 21.5386 20.0004 17.6917 20.0004ZM17.6917 8.64695C15.2567 8.64695 13.2755 10.6209 13.2755 13.0471C13.2755 15.4732 15.2567 17.4472 17.6917 17.4472C20.1268 17.4472 22.108 15.4732 22.108 13.0471C22.108 10.6209 20.1268 8.64695 17.6917 8.64695Z" fill="white"/>
                <path d="M35.1048 13.9066C31.255 13.9066 28.126 10.7861 28.126 6.95331C28.126 3.12057 31.258 0 35.1048 0C38.9516 0 42.0837 3.12057 42.0837 6.95331C42.0837 10.7861 38.9516 13.9066 35.1048 13.9066ZM35.1048 2.5532C32.6698 2.5532 30.6885 4.52719 30.6885 6.95331C30.6885 9.37943 32.6698 11.3534 35.1048 11.3534C37.5399 11.3534 39.5211 9.37943 39.5211 6.95331C39.5211 4.52719 37.5399 2.5532 35.1048 2.5532Z" fill="white"/>
                <path d="M30.6885 7.23438H28.126V20.0003H30.6885V7.23438Z" fill="white"/>
                <path d="M57.5659 20.0004H54.6949L51.5955 13.8213L49.2702 16.6464L46.9479 13.8213L43.8455 20.0004H40.9863L46.4259 9.1582L49.2702 12.6216L52.1234 9.1582L57.5659 20.0004Z" fill="white"/>
                <path d="M5.54302 20C4.59985 20 3.25035 19.8257 2.24193 18.9776C1.66951 18.4959 0.984375 17.5976 0.984375 16.0698V0.591064H3.54694V16.0698C3.54694 16.6638 3.7427 16.9002 3.89099 17.0243C4.44859 17.5001 5.70021 17.4823 6.21629 17.3996L6.63745 19.9173C6.53364 19.935 6.11248 20 5.54005 20H5.54302Z" fill="white"/>
                <path d="M7.70191 6.54907H1.88867V9.10226H7.70191V6.54907Z" fill="white"/>
                <path d="M49.2967 9.14956C47.0603 9.14956 45.2393 7.33514 45.2393 5.107C45.2393 2.87887 47.0603 1.06445 49.2967 1.06445C51.533 1.06445 53.3541 2.87887 53.3541 5.107C53.3541 7.33514 51.533 9.14956 49.2967 9.14956ZM49.2967 1.48999C47.2947 1.48999 45.6664 3.11232 45.6664 5.107C45.6664 7.10169 47.2947 8.72402 49.2967 8.72402C51.2987 8.72402 52.927 7.10169 52.927 5.107C52.927 3.11232 51.2987 1.48999 49.2967 1.48999Z" fill="black"/>
                <path d="M53.1408 5.74506C52.7879 5.74506 52.5002 5.45841 52.5002 5.10676C52.5002 3.34553 51.0647 1.91527 49.297 1.91527C47.5293 1.91527 46.0938 3.34553 46.0938 5.10676C46.0938 5.45841 45.8061 5.74506 45.4531 5.74506C45.1002 5.74506 44.8125 5.45841 44.8125 5.10676C44.8125 2.64222 46.8234 0.638672 49.297 0.638672C51.7706 0.638672 53.7815 2.64222 53.7815 5.10676C53.7815 5.45841 53.4938 5.74506 53.1408 5.74506Z" fill="black"/>
                <path d="M71.9622 12.2696C71.547 9.06625 68.7886 6.58398 65.4608 6.58398C61.8454 6.58398 58.9061 9.51543 58.9061 13.1147C58.9061 16.714 61.8454 19.6455 65.4608 19.6455C67.0506 19.6455 68.584 19.0722 69.7793 18.029L68.7056 16.8086C67.8069 17.5917 66.6561 18.0231 65.4608 18.0231C63.011 18.0231 60.9734 16.2323 60.5967 13.8949H71.9681C72.0007 13.6378 72.0156 13.3777 72.0156 13.1177C72.0156 12.831 71.9978 12.5503 71.9592 12.2725L71.9622 12.2696ZM60.6115 12.2696C61.0149 9.9646 63.0377 8.20928 65.4638 8.20928C67.89 8.20928 69.9127 9.96755 70.3161 12.2696H60.6115Z" fill="white" stroke="white" stroke-miterlimit="10"/>
                </svg>
            </button>
            </NavLink>
      </div>
    </div>
  );
}

export default SuccessPage;