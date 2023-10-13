import React, {useState} from 'react'
import {BiGift} from 'react-icons/bi'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import CampaignDonation from '../campaignDonation/CampaignDonation'
import CampaignTopDonation from '../campaignDonation/CampaignTopDonation'
import './campaignDetail_center.scss'

function CampaignDetail_center() {

    const [openDono, setOpenDono] = useState()
    const [openTopDono, setOpenTopDono] = useState()

    const openTopdonationtab = () => {
        setOpenTopDono(true)
    }

    const closeTopDonoTab = () => {
        setOpenTopDono(false);
    }

    const opendonationtab = () => {
        setOpenDono(true)
    }

    const closeDonoTab = () => {
        setOpenDono(false);
    }

  return (
    <div className="detailsCenter">
    <div className="justTop">
        <AiOutlineUsergroupAdd className='topIcon' />
        <span>30 people just Topped theresa ubong</span>
    </div>

    <div className="Top_donation">
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

    <div className="Top_donation">
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

    <div className="donationBtn">

        <div className="seemore"  onClick={opendonationtab}>see more</div>
        <div className="seeTopDon" onClick={openTopdonationtab}>see top donation</div>

    </div>
    {openDono && (
       
            <CampaignDonation closeDonoTab ={closeDonoTab}/>
       
    )}
    {openTopDono && (
       
            <CampaignTopDonation closeDonoTab ={closeTopDonoTab}/>
       
    )}
</div>
  )
}

export default CampaignDetail_center