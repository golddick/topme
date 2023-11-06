//import './donor.scss'
import './campaignDetails.scss'
import Sidebar from '../../components/leftbar/Sidebar';
import Hometop from '../../components/homepage/HomeTop/Hometop'
import {  NavLink } from 'react-router-dom';
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import ReceivingOrganization from './ReceivingOrganization';
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import Join from '../../components/homepage/join/Join';
import CampaignBox from '../../components/campaignImageBox/CampaignBox';
import AngelFooter from '../../components/homepage/footer/AngelFooter';
import CampaignInfo from '../../components/post/PostInfo';
import AngelProgress from '../../components/homepage/AngelProgress/AngelProgress';
import CampaignDetail_top from '../../components/campaignDetail_top/CampaignDetail_top';
import CampaignDetail_center from '../../components/campaignDetail_center/CampaignDetail_center';
import CampaignDetail_bottom from '../../components/campaignDetail_bottom/CampaignDetail_bottom';
import {FaEnvelope} from 'react-icons/fa'
import MobilePost from '../../components/mobileComponent /mobilePostCont/MobilePost';
import TruncateBio from './TruncateBio/TruncateBio';
import YoutubeTab from '../../components/YoutubeTab/YoutubeTab';
import Comment from '../../components/CommentTab/Comment';



function CampaignDetails() {
  return (
    <div className='CampaignDetails'>
          <Hometop/>

        <div className="CampaignDetails_Body">
          
        <div className="CampaignDetails_Left">

        <div className="back">
        <IoIosArrowDropleftCircle />
        </div>
          <Sidebar/>
        </div>

          <div className="CampaignDetails_Center">
            <CampaignBox/>
            <CampaignInfo/>
            <AngelProgress/>
            </div>
            
        <div className="CampaignDetails_Right">
            <CampaignDetail_top/>
            <CampaignDetail_center/>
            <CampaignDetail_bottom/>
        </div>
        
        </div>
           <div className="joinTab" > <Join /></div>
           <div className="tabFooter"> <AngelFooter/></div>


           <div className="mobileView">
            <Sidebar />
            <MobilePost/>
            <ReceivingOrganization/>
            <CampaignDetail_center/>
            <CampaignDetail_bottom/>
            <TruncateBio/>
            <YoutubeTab/>
            <Comment/>
            <CampaignBox/> 
            <AngelProgress/>
            <Join />
            <AngelFooter/>
           </div>
    </div>
  )
}

export default CampaignDetails