import React, { useState } from 'react'
import './campaignDonation.scss'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {BiGift} from 'react-icons/bi'
import CampaignDonation from './CampaignDonation'

function CampaignTopDonation({closeDonoTab}) {
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
        <span>TOP DONATIONS (520)</span>
        <AiOutlineCloseCircle className='dono-closeIcon' onClick={closeDonoTab} />
       </div>

        <span className='topdonoTxt'>Be a top donor by donating $100 and above</span>

       <div className="donoBody">
        <BsFillPatchCheckFill className='topDonoIcon'/>
        <div className="donationRight">
            <div className="donTop">
                <span>sharon chioma </span><b>.</b>  <p>Top donation</p>
            </div>
            <div className="donBottom">
                <span>$1,500</span> <b>.</b> <p>2 days ago</p>
            </div>
        </div>
    </div>
    
      

    <div className="donoBody">
        <BsFillPatchCheckFill className='topDonoIcon'/>
        <div className="donationRight">
            <div className="donTop">
                <span>sharon chioma </span><b>.</b>  <p>Top donation</p>
            </div>
            <div className="donBottom">
                <span>$1,500</span> <b>.</b> <p>2 days ago</p>
            </div>
        </div>
    </div>
    
  

    <div className="donoBody">
        <BsFillPatchCheckFill className='topDonoIcon'/>
        <div className="donationRight">
            <div className="donTop">
                <span>sharon chioma </span><b>.</b>  <p>Top donation</p>
            </div>
            <div className="donBottom">
                <span>$1,500</span> <b>.</b> <p>2 days ago</p>
            </div>
        </div>
    </div>
    
    

    <div className="donoBody">
        <BsFillPatchCheckFill className='topDonoIcon'/>
        <div className="donationRight">
            <div className="donTop">
                <span>sharon chioma </span><b>.</b>  <p>Top donation</p>
            </div>
            <div className="donBottom">
                <span>$1,500</span> <b>.</b> <p>2 days ago</p>
            </div>
        </div>
    </div>
    
   

    <div className="donoBottom">
        <div className="topmeBtn">Top me</div>
        <div className="seeTopDono" onClick={opendonationtab}>see all donation  <BiGift style={{ color:'#43C4B2'}}/></div>
    </div>

        </div>
        {openDono && (
       
       <CampaignDonation closeDonoTab ={closeDonationTab}/>
  
)}
    </div>
  )
}

export default CampaignTopDonation