import React from 'react'
import {BiGift} from 'react-icons/bi'
import './campaigndetailTop.scss'
import ProgressBar from '../Progressbar/Progressbar'

function CampaignDetail_top() {
  return (
    <div className="detailsTop">
                <div className="topDetails">
                    <ProgressBar percentage ='30' />
                <div className="donationtab">
                    <div className="donation">
                        <BiGift className='donationIcon'/>
                        <span>donation so far: <b>$10,000</b></span>
                    </div>

                    <div className="donation">
                        <BiGift className='donationIcon'/>
                        <span>donation so far: <b>$10,000</b></span>
                    </div>
                </div>
                </div>

                <div className="button">top me</div>
            </div>
  )
}

export default CampaignDetail_top