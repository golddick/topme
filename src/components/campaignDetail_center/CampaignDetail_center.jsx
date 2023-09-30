import React from 'react'
import {BiGift} from 'react-icons/bi'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import './campaignDetail_center.scss'

function CampaignDetail_center() {
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

        <div className="seemore">see more</div>
        <div className="seeTopDon">see top donation</div>

    </div>
</div>
  )
}

export default CampaignDetail_center