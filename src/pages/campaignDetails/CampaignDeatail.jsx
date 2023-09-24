//import './donor.scss'
import './campaignDetails.scss'
import Sidebar from '../../components/leftbar/Sidebar';
import Hometop from '../../components/homepage/HomeTop/Hometop'
import {  NavLink } from 'react-router-dom';
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import {BiGift} from 'react-icons/bi'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import Join from '../../components/homepage/join/Join';
//import Post from '../../components/post/Post'
import AngelFooter from '../../components/homepage/footer/AngelFooter';
import CampaignInfo from '../../components/post/PostInfo';
import {FaEnvelope} from 'react-icons/fa'



function CampaignDetails() {
  return (
    <div className='CampaignDetails'>
          <Hometop/>

        <div className="CampaignDetails_Body">
          
        <div className="CampaignDetails_Left">

        <div className="return">
        <IoIosArrowDropleftCircle />
        </div>
          <Sidebar/>
        </div>

          <div className="CampaignDetails_Center">
            <CampaignInfo/>
            </div>
            
        <div className="CampaignDetails_Right">
            <div className="detailsTop">
                <div className="topDetails">
                    hh
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

            <div className="detailsCenter">
                <div className="justTop">
                    <AiOutlineUsergroupAdd className='topIcon' />
                    <span>people just Topped theresa ubong</span>
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

        </div>
        </div>
           {/* <div className="joinTab" > <Join /></div> */}
           <div className="tabFooter"> <AngelFooter/></div>
    </div>
  )
}

export default CampaignDetails