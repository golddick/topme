import React, {useState}from 'react'
import './campaignDonation.scss'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {BiGift} from 'react-icons/bi'
import CampaignTopDonation from './CampaignTopDonation'

function CampaignDonation({closeDonoTab}) {
    
    const [openTopdono, setOpenTopDono] = useState()

    const open = () => {
        setOpenTopDono(true)
    }
    const closeTopDonoTab = () => {
        setOpenTopDono(false);
    }

  return (

    <div className="openDonation">

        <div className='CampaignDonation'>
            <div className="donoTopBar">
                <span>DONATIONS (3,234)</span>
                <AiOutlineCloseCircle className='dono-closeIcon' onClick={closeDonoTab}/>
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
                <BiGift className='giftIcon'/>
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
                <BiGift className='giftIcon'/>
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
                <BiGift className='giftIcon'/>
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
                <BiGift className='giftIcon'/>
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
                <div className="topmeBtn">Top me</div>
                <div className="seeTopDono" onClick={open}>see top donation  <BsFillPatchCheckFill className='topDonoIcon'/></div>
            </div>

            {openTopdono && (
                <CampaignTopDonation closeDonoTab ={closeTopDonoTab}/>
            )}

         </div>
    </div>
    
  )
}

export default CampaignDonation