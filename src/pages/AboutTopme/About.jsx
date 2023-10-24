import './about.scss'
import AngelImpact from '../../components/homepage/angelImpact/Impact'
import Hometop from '../../components/homepage/HomeTop/Hometop'
import Aboutimg from '../../assets/aboutleft.png'
import Optiontab from '../../components/Option/Option'
import AngelFooter from '../../components/homepage/footer/AngelFooter'
import {BiLogoFacebook,BiLogoYoutube,BiLogoInstagram,BiLogoTwitter}from 'react-icons/bi' 

function About() {
  return (
    <div className='About'>
    <Hometop/>
 
       <div className="aboutBody">
       <div className="aboutContent">

    <div className="landingAbout">
    <div className="topText">
        <h3>about</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="21" viewBox="0 0 72 21" fill="none">
        <path d="M17.2227 20.0004C13.3795 20.0004 10.2559 16.8798 10.2559 13.0471C10.2559 9.21432 13.3825 6.09375 17.2227 6.09375C21.0629 6.09375 24.1896 9.21432 24.1896 13.0471C24.1896 16.8798 21.0629 20.0004 17.2227 20.0004ZM17.2227 8.64695C14.7919 8.64695 12.814 10.6209 12.814 13.0471C12.814 15.4732 14.7919 17.4472 17.2227 17.4472C19.6536 17.4472 21.6314 15.4732 21.6314 13.0471C21.6314 10.6209 19.6536 8.64695 17.2227 8.64695Z" fill="black"/>
        <path d="M34.6075 13.9066C30.7643 13.9066 27.6406 10.7861 27.6406 6.95331C27.6406 3.12057 30.7673 0 34.6075 0C38.4477 0 41.5743 3.12057 41.5743 6.95331C41.5743 10.7861 38.4477 13.9066 34.6075 13.9066ZM34.6075 2.5532C32.1766 2.5532 30.1988 4.52719 30.1988 6.95331C30.1988 9.37943 32.1766 11.3534 34.6075 11.3534C37.0383 11.3534 39.0162 9.37943 39.0162 6.95331C39.0162 4.52719 37.0383 2.5532 34.6075 2.5532Z" fill="black"/>
        <path d="M30.1988 7.23438H27.6406V20.0003H30.1988V7.23438Z" fill="black"/>
        <path d="M57.0296 20.0004H54.1635L51.0694 13.8213L48.7481 16.6464L46.4298 13.8213L43.3328 20.0004H40.4785L45.9087 9.1582L48.7481 12.6216L51.5965 9.1582L57.0296 20.0004Z" fill="black"/>
        <path d="M5.09573 19.9998C4.15418 19.9998 2.807 19.8255 1.80032 18.9773C1.22888 18.4957 0.544922 17.5973 0.544922 16.0695V0.59082H3.10309V16.0695C3.10309 16.6635 3.2985 16.8999 3.44654 17.024C4.00318 17.4998 5.25265 17.4821 5.76784 17.3993L6.18828 19.9171C6.08465 19.9348 5.66421 19.9998 5.09277 19.9998H5.09573Z" fill="black"/>
        <path d="M7.25051 6.54883H1.44727V9.10202H7.25051V6.54883Z" fill="black"/>
        <path d="M48.7731 9.14956C46.5406 9.14956 44.7227 7.33514 44.7227 5.107C44.7227 2.87887 46.5406 1.06445 48.7731 1.06445C51.0056 1.06445 52.8235 2.87887 52.8235 5.107C52.8235 7.33514 51.0056 9.14956 48.7731 9.14956ZM48.7731 1.48999C46.7745 1.48999 45.149 3.11232 45.149 5.107C45.149 7.10169 46.7745 8.72402 48.7731 8.72402C50.7716 8.72402 52.3971 7.10169 52.3971 5.107C52.3971 3.11232 50.7716 1.48999 48.7731 1.48999Z" fill="#43C4B2"/>
        <path d="M52.6109 5.74506C52.2586 5.74506 51.9714 5.45841 51.9714 5.10676C51.9714 3.34553 50.5383 1.91527 48.7737 1.91527C47.009 1.91527 45.576 3.34553 45.576 5.10676C45.576 5.45841 45.2888 5.74506 44.9364 5.74506C44.5841 5.74506 44.2969 5.45841 44.2969 5.10676C44.2969 2.64222 46.3043 0.638672 48.7737 0.638672C51.243 0.638672 53.2504 2.64222 53.2504 5.10676C53.2504 5.45841 52.9632 5.74506 52.6109 5.74506Z" fill="#43C4B2"/>
        <path d="M71.4008 12.2696C70.9863 9.06625 68.2327 6.58398 64.9106 6.58398C61.3014 6.58398 58.3672 9.51543 58.3672 13.1147C58.3672 16.714 61.3014 19.6455 64.9106 19.6455C66.4976 19.6455 68.0284 19.0722 69.2216 18.029L68.1498 16.8086C67.2527 17.5917 66.1039 18.0231 64.9106 18.0231C62.465 18.0231 60.4309 16.2323 60.0549 13.8949H71.4067C71.4393 13.6378 71.4541 13.3777 71.4541 13.1177C71.4541 12.831 71.4363 12.5503 71.3978 12.2725L71.4008 12.2696ZM60.0697 12.2696C60.4723 9.9646 62.4916 8.20928 64.9136 8.20928C67.3356 8.20928 69.3549 9.96755 69.7575 12.2696H60.0697Z" fill="black" stroke="black" strokeMiterlimit="10"/>
        </svg>
    </div>
    <h4> TopMe is that one place to amplify one’s need for help.</h4>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

    <div className="aboutImage">
    <div className="left">
        <img src={Aboutimg} alt="" />
    </div>
    <div className="right">
        <div className="top">
        <img src={Aboutimg} alt="" />
        </div>
        <div className="down">
        <img src={Aboutimg} alt="" />
        </div>
        
    </div>
</div>
</div>

<p>A Nigerian community of +1K Angels helping one another with love.</p>
<div className="aboutstat">
    <div className="left">
        <div className="toptext">
        <span>raised by our community</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M1.69922 7.91953C1.69922 4.83953 3.45922 3.51953 6.09922 3.51953H14.8892C17.1292 3.51953 18.7392 4.46953 19.1692 6.63953C19.2492 7.02953 19.2892 7.44953 19.2892 7.91953V13.0695C19.2892 16.1495 17.5292 17.4695 14.8892 17.4695H6.09922C5.64922 17.4695 5.21922 17.4295 4.81922 17.3395C4.56922 17.2995 4.32922 17.2295 4.10922 17.1495C2.60922 16.5895 1.69922 15.2895 1.69922 13.0695V11.9995" stroke="#808080" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.2981 15.0096V16.0696C22.2981 19.1496 20.5381 20.4696 17.8981 20.4696H9.10812C8.36812 20.4696 7.69812 20.3696 7.11812 20.1496C5.92812 19.7096 5.11812 18.7996 4.82812 17.3396C5.22813 17.4296 5.65812 17.4696 6.10812 17.4696H14.8981C17.5381 17.4696 19.2981 16.1496 19.2981 13.0696V7.91965C19.2981 7.44965 19.2581 7.02965 19.1781 6.63965C21.0881 7.02965 22.2981 8.36965 22.2981 10.9196" stroke="#808080" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.1403 10.5004C13.1403 9.04035 11.9603 7.86035 10.5003 7.86035C9.04034 7.86035 7.86034 9.04035 7.86034 10.5004C7.86034 11.9604 9.04034 13.1404 10.5003 13.1404M4.77734 8.30035V12.7004M16.2193 8.30035V12.7004" stroke="#808080" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        <h4>$100 Thousand</h4>
        
    </div>
    <div className="center">
    <div className="toptext">
            <span>donations given on TopMe</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.4319 2.42C11.4019 1.86 12.6019 1.86 13.5819 2.42L19.5219 5.85C20.4919 6.41 21.0919 7.45 21.0919 8.58V15.42C21.0919 16.54 20.4919 17.58 19.5219 18.15L13.5819 21.58C12.6119 22.14 11.4119 22.14 10.4319 21.58L4.49188 18.15C4.01365 17.8727 3.61681 17.4745 3.34123 16.9953C3.06564 16.5161 2.92102 15.9728 2.92188 15.42V8.58C2.92188 7.46 3.52188 6.42 4.49188 5.85L6.39188 4.75" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 16.6578C16 14.8578 14.21 13.3978 12 13.3978C9.79 13.3978 8 14.8578 8 16.6578M12.002 10.9998C12.62 10.9998 13.2126 10.7544 13.6496 10.3174C14.0865 9.88044 14.332 9.2878 14.332 8.66984C14.332 8.05189 14.0865 7.45924 13.6496 7.02228C13.2126 6.58533 12.62 6.33984 12.002 6.33984C11.384 6.33984 10.7914 6.58533 10.3544 7.02228C9.91748 7.45924 9.672 8.05189 9.672 8.66984C9.672 9.2878 9.91748 9.88044 10.3544 10.3174C10.7914 10.7544 11.384 10.9998 12.002 10.9998Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <h4>+10M</h4>
    </div>
    <div className="right">
    <div className="toptext">
                <span>donations is given every minute on TopMe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 15 22" fill="none">
                <path d="M11.8955 17.4442L10.9634 20.2407C10.8918 20.4555 10.6908 20.6004 10.4644 20.6004H4.9103C4.68389 20.6004 4.48287 20.4555 4.41127 20.2407L3.47911 17.4442M3.47911 4.55655L4.41127 1.76007C4.48287 1.54527 4.68389 1.40039 4.9103 1.40039H10.4644C10.6908 1.40039 10.8918 1.54527 10.9634 1.76007L11.8955 4.55655M2.95308 17.4442H12.4216C13.2931 17.4442 13.9997 16.7377 13.9997 15.8661V6.39765C13.9997 5.5261 13.2931 4.81957 12.4216 4.81957H2.95308C2.08153 4.81957 1.375 5.5261 1.375 6.39765V15.8661C1.375 16.7377 2.08153 17.4442 2.95308 17.4442Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
        </div>
         <h4>1/minute</h4>
       
    </div>
</div>

<div className="team">
    <h3>Meet Our Team</h3>
    <div className="teamCard">
        <div className="teamBox">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQa7RRyTNTV7_QeWnZBMW_IbQzz8V3cFEGQ&usqp=CAU" alt="" />
            <div className="teamName">
                <span>Mmema Ekukiam</span>
                <h5>Managing Editor</h5>
            </div>
            <div className="socials">
                <BiLogoYoutube className='icon'/>
                <BiLogoFacebook className='icon'/>
                <BiLogoInstagram className='icon'/>
                <BiLogoTwitter className='icon'/>
            </div>
        </div>
        <div className="teamBox">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQa7RRyTNTV7_QeWnZBMW_IbQzz8V3cFEGQ&usqp=CAU" alt="" />
            <div className="teamName">
                <span>Mmema Ekukiam</span>
                <h5>Managing Editor</h5>
            </div>
            <div className="socials">
                <BiLogoYoutube className='icon'/>
                <BiLogoFacebook className='icon'/>
                <BiLogoInstagram className='icon'/>
                <BiLogoTwitter className='icon'/>
            </div>
        </div>
        <div className="teamBox">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQa7RRyTNTV7_QeWnZBMW_IbQzz8V3cFEGQ&usqp=CAU" alt="" />
            <div className="teamName">
                <span>Mmema Ekukiam</span>
                <h5>Managing Editor</h5>
            </div>
            <div className="socials">
                <BiLogoYoutube className='icon'/>
                <BiLogoFacebook className='icon'/>
                <BiLogoInstagram className='icon'/>
                <BiLogoTwitter className='icon'/>
            </div>
        </div>
        <div className="teamBox">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQa7RRyTNTV7_QeWnZBMW_IbQzz8V3cFEGQ&usqp=CAU" alt="" />
            <div className="teamName">
                <span>Mmema Ekukiam</span>
                <h5>Managing Editor</h5>
            </div>
            <div className="socials">
                <BiLogoYoutube className='icon'/>
                <BiLogoFacebook className='icon'/>
                <BiLogoInstagram className='icon'/>
                <BiLogoTwitter className='icon'/>
            </div>
        </div>
    </div>
</div>
</div>
       </div>
        <AngelImpact/>
        <div className="optionn" >
        <Optiontab/>
        </div>
        <AngelFooter/>
        </div>
  )
}

export default About