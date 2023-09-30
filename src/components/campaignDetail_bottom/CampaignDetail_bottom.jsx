import React from 'react'
import './campaignDetail_bottom.scss'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'

function CampaignDetail_bottom() {
  return (
    <div className="detailsBottom">
                <div className="adopted">
                    <AiOutlineUsergroupAdd className='adoptIcon'/>
                    <span>32 people has adopted this post</span>
                </div>
                <div className="adoptedName">
                    <div className="nameTop">sharon chioma </div>
                    <div className="nameBottom">
                        <span>Adopted this cause</span> <b>.</b> 
                        <p>2 days ago</p>
                    </div>
                </div>
                <div className="adoptedName">
                    <div className="nameTop">sharon chioma </div>
                    <div className="nameBottom">
                        <span>Adopted this cause</span> <b>.</b> 
                        <p>2 days ago</p>
                    </div>
                </div>

                <div className="adoptBtn">see adoption</div>
            </div>
  )
}

export default CampaignDetail_bottom