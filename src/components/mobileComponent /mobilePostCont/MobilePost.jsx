import React,{useState , useEffect, useRef  } from 'react';
import { BsGift } from 'react-icons/bs';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { FaShare } from 'react-icons/fa';
import {BsHeart} from 'react-icons/bs'
import ShareContainer from '../../ShareContainer/ShareContainer';
import ProgressBar from '../../Progressbar/Progressbar';
//import VerticalProgressbar from '../../components/Progressbar/Progressbar';
import './mobilePost.scss'


function MobilePost() {

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
  
  ];

  

  return (
    <div className="mobilePost">
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
            
            <div className="statleft" >
            {
                showShare &&(<ShareContainer closeshareConterner ={popupRef}/>)
              }
              <BsThreeDotsVertical className='dotIcon'  onClick={handleClick}/>
            </div>
          </div>

          <div className="postStory">
          
              <p>{post.postheader}</p>
            
        <div className="center">
              {/* <img src={post.postimg} alt="" /> */}

              <div className="storyTop"style={{ backgroundImage: `url(${post.postimg})` }}  >
              
              <div className="storyCenter">
                {/* <div className="postReaction" > */}

                <div className="progressBar">
                  <ProgressBar  percentage ="70" />
                </div>
                <div className="likeBtn">
                <BsHeart className='Like-icon'/>
                <span className='icon-text'> 12 </span>
              </div>
                {/* </div> */}
             

              </div>
              <div className="down">
                <p>{post.postbio}</p>
              </div>
            </div>
            </div>
           
        </div>
          </div>
      ))}

      <div className="donTrack">
        <h3>DONATION SO FAR:</h3>
        <span>$20,00</span>
        <h3>DONATION TARGET:</h3>
        <span>$20,00</span>
      </div>

      <div className="topBtn"> top me</div>
    </div>
  );
}

export default MobilePost;
