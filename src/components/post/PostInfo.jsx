import { useState , useEffect, useRef  } from 'react';
import YoutubeTab from '../YoutubeTab/YoutubeTab';
import TruncateBio from '../../pages/campaignDetails/TruncateBio/TruncateBio';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import ReceivingOrganization from '../../pages/campaignDetails/ReceivingOrganization';
import {BsHeart, BsChevronDown} from 'react-icons/bs'
import Comment from '../CommentTab/Comment';
import ShareContainer from '../ShareContainer/ShareContainer';
import VerticalProgressbar from '../../components/Progressbar/Progressbar';
import './post.scss'
import './postInfo.scss'


function CampaignInfo() {

  const [showShare, setShowShare] = useState(false);
  const popupRef = useRef(null);
  const handleClick = () => setShowShare(true)


  const closePopup = () => {
    setShowShare(false);
  };
 // Add an event listener to the document to handle clicks outside the popup
 useEffect(() => {
  function handleClickOutside(event) {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  }

  if (showShare) {
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [showShare]);


  const posts = [
    {
      featuredpost: 'featured post',
      status: 'Ongoing',
      postheader: 'Help build a legacy for the Makoko kids.',
      postimg:
        'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
      postbio:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
    },
    // {
    //   featuredpost: '',
    //   status: 'Completed',
    //   postheader: 'Help build a legacy for the Makoko kids.',
    //   postimg:
    //     'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
    //   postbio:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
    // },
    // {
    //   featuredpost: '',
    //   status: 'Ongoing',
    //   postheader: 'Help build a legacy for the Makoko kids.',
    //   postimg:
    //     'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
    //   postbio:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
    // },
    // {
    //   featuredpost: 'featured post',
    //   status: 'completed',
    //   postheader: 'Help build a legacy for the Makoko kids.',
    //   postimg:
    //     'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
    //   postbio:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
    // },
  ];


  return (
    <div className="post" style={{borderRadius:'12px', border:'1.5px solid #43C4B2',justifyContent:'center'}}>
      {/* <div className="PostStatus">
       <div className="causes"> <span>Ongoing Causes</span></div>
       <div className="causes"> <span>Completed Causes</span></div>
       <div className="causes"> <span>All Causes</span></div>
      </div> */}
      {posts.map((post, index) => (
        <div key={index} className={`postItem ${post.featuredpost ? 'featuredPost' : 'noFeaturePost'}`}>
          <div className="postStat">
            <div className="right">
              <div className="top">
              {post.featuredpost && <span className="fPost">{post.featuredpost}</span>}
              <span
                  className={`status-${post.status.toLowerCase().replace(' ', '-')}${post.featuredpost ? '' : ' nofeaturedpost'}`}
                >
                  {post.status}
                </span>
              </div>
              <div className="postTime">
                <div className="thread">
                  +2 threads
                </div>  
                <span className="dot">.</span>
                <span>19/04/2023</span>
                <span className="dot">.</span>
                <span>1 month ago</span>
                <span className="dot">.</span>
             
                <span>
                  <CiLocationOn className="icon" />
                  Lagos, Nigeria
                </span>
              </div>
            </div>
            {
                showShare &&(<ShareContainer closeshareConterner ={popupRef}/>)
              }
            
            <div className="statleft" onClick={handleClick}>
              <BsThreeDotsVertical className='dotIcon' />
            </div>
           
          </div>
          
          <div className="postStory">
          
              <p>{post.postheader}</p>
            
        <div className="center">
              <img src={post.postimg} alt="" />

              <div className="storyTop" style={{position:'relative'}}>
              
              
              <div className="storyCenter" >
              <div className="likeBtn" style={{position:'absolute', bottom:'0', right:'0'}}>
                <BsHeart className='LikeIcon'/>
                <span>12 Likes</span>
              </div>
              </div>
             
            </div>
            </div>
           
        </div>
          </div>
      ))}


              <ReceivingOrganization/>
                <TruncateBio/>
                <YoutubeTab/>

                <button>Top Me</button>

                <Comment/>
    </div>
  );
}

export default CampaignInfo ;
