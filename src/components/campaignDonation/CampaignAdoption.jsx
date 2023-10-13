import React, { useState } from 'react'
import './campaignDonation.scss'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {BiGift} from 'react-icons/bi'
import CampaignDonation from './CampaignDonation'



function CampaignAdoption({CloseAdoption}) {

    const [openDono, setOpenDono] = useState()

    const opendonationtab = () => {
        setOpenDono(true)
    }

    const closeDonationTab = () => {
        setOpenDono(false);
    }

  return (
    <div className="openDonation">
         <div className='CampaignDonation'>
       <div className="donoTopBar">
        <span>ADOPTORS (104)</span>
        <AiOutlineCloseCircle className='dono-closeIcon' onClick={CloseAdoption} />
       </div>

       <div className="donoBody">
       <div className="bodyIcon" style={{
        display: 'flex',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '100px',
        background: 'rgba(67, 196, 178, 0.15)',
       }}>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 21.2L2.0004 17.5996C2.00063 15.6115 3.61234 14 5.6004 14H12.7999M15.8 17L17 18.2L21.2 14M14 5.6C14 7.58822 12.3882 9.2 10.4 9.2C8.41177 9.2 6.8 7.58822 6.8 5.6C6.8 3.61177 8.41177 2 10.4 2C12.3882 2 14 3.61177 14 5.6Z" stroke="#43C4B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
        <div className="donationRight">
            <div className="donTop">
                <span>sharon chioma </span>
            </div>
            <div className="donBottom">
                <span>$1,500</span> <b>.</b> <p>2 days ago</p>
            </div>
        </div>
    </div>
    
      

    <div className="donoBody">
    <div className="bodyIcon" style={{
        display: 'flex',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '100px',
        background: 'rgba(67, 196, 178, 0.15)',
       }}>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 21.2L2.0004 17.5996C2.00063 15.6115 3.61234 14 5.6004 14H12.7999M15.8 17L17 18.2L21.2 14M14 5.6C14 7.58822 12.3882 9.2 10.4 9.2C8.41177 9.2 6.8 7.58822 6.8 5.6C6.8 3.61177 8.41177 2 10.4 2C12.3882 2 14 3.61177 14 5.6Z" stroke="#43C4B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
        <div className="donationRight">
            <div className="donTop">
                <span>sharon chioma </span>
            </div>
            <div className="donBottom">
                <span>$1,500</span> <b>.</b> <p>2 days ago</p>
            </div>
        </div>
    </div>
    
  

    <div className="donoBody">
    <div className="bodyIcon" style={{
        display: 'flex',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '100px',
        background: 'rgba(67, 196, 178, 0.15)',
       }}>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 21.2L2.0004 17.5996C2.00063 15.6115 3.61234 14 5.6004 14H12.7999M15.8 17L17 18.2L21.2 14M14 5.6C14 7.58822 12.3882 9.2 10.4 9.2C8.41177 9.2 6.8 7.58822 6.8 5.6C6.8 3.61177 8.41177 2 10.4 2C12.3882 2 14 3.61177 14 5.6Z" stroke="#43C4B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
        <div className="donationRight">
            <div className="donTop">
                <span>sharon chioma </span>
            </div>
            <div className="donBottom">
                <span>$1,500</span> <b>.</b> <p>2 days ago</p>
            </div>
        </div>
    </div>
    
    

    <div className="donoBody">

       <div className="bodyIcon" style={{
        display: 'flex',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '100px',
        background: 'rgba(67, 196, 178, 0.15)',
       }}>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 21.2L2.0004 17.5996C2.00063 15.6115 3.61234 14 5.6004 14H12.7999M15.8 17L17 18.2L21.2 14M14 5.6C14 7.58822 12.3882 9.2 10.4 9.2C8.41177 9.2 6.8 7.58822 6.8 5.6C6.8 3.61177 8.41177 2 10.4 2C12.3882 2 14 3.61177 14 5.6Z" stroke="#43C4B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
        <div className="donationRight">
            <div className="donTop">
                <span>sharon chioma </span>
            </div>
            <div className="donBottom">
                <span>$1,500</span> <b>.</b> <p>2 days ago</p>
            </div>
        </div>
    </div>
    
   

    <div className="donoBottom">
        <div className="topmeBtn" style={{width:'100%'}}>Top me</div>
        {/* <div className="seeTopDono" onClick={opendonationtab}>see all donation  <BiGift style={{ color:'#43C4B2'}}/></div> */}
    </div>

        </div>

    </div>
  )
}

export default CampaignAdoption