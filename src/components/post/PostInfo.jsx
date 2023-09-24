import { useState } from 'react';
import { BsGift } from 'react-icons/bs';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import {RiAddBoxLine} from 'react-icons/ri';
import {BsHeart, BsChevronDown} from 'react-icons/bs'
import { BsPersonCheck } from "react-icons/bs";
import { MdQueryStats, MdOutlineVolunteerActivism } from "react-icons/md";
import YouTube from 'react-youtube';
import VerticalProgressbar from '../../components/Progressbar/Progressbar';
import './post.scss'
import './postInfo.scss'


function getVideoIdFromUrl(url) {
  // Extract the video ID from the YouTube URL
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[7]) ? match[7] : '';
}

function CampaignInfo() {
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

  function TruncatedContent({ content }) {
    const [showFullContent, setShowFullContent] = useState(false);
  
    const toggleContent = () => {
      setShowFullContent(!showFullContent);
    };
  
    const truncateContent = (text, limit) => {
      const words = text.split(' ');
      if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
      }
      return text;
    };
  
    return (
      <div className='textContent'>
        <p className="PostText">
          {showFullContent ? content : truncateContent(content, 30)}
        </p>
        {content.split(' ').length > 50 && (
          <button onClick={toggleContent}>
            {showFullContent ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    );
  }
  
  const youtubeLinkUrl = 'https://www.youtube.com/watch?v=MhBYWBu9-9Q';
  const videoId = getVideoIdFromUrl(youtubeLinkUrl);

  const opts = {
    playerVars: {
    controls: 1,
    autoplay: 0,
    },
  };

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
            
            <div className="statleft">
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


              <div className="postinfo">
                  <BsPersonCheck className="icon" />
                  <div className="info">
                    <div className="infoLeft">
                      <span>receiving organization </span>
                      <p>Kings collage, Lagos.</p>
                    </div>
                    <div className="infoRight">
                      <div className="Rinfo">
                        <MdQueryStats className="Icons" />
                        <span>32 recent donations</span>
                      </div>
                      <div className="Rinfo">
                        <MdOutlineVolunteerActivism className="Icons" />
                        <span>32 recent donations</span>
                      </div>
                    </div>
                  </div>
                </div>

              
              <TruncatedContent  content="   
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing
            sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
            consequat, leo eget bibendum sodales, augue velit cursus nunc.." />

             
                <div className="campaingVideo">
                <YouTube videoId={videoId} opts={opts} className='youTube'/>
                <div className="videoInfo">
                  <h3>Help build a legacy for the Makoko kids.</h3>
                  <p>A Short film of the life of children living in Makoko, Lagos and what Theresa Ubong and Kings...</p>
                  <span>www.youtube.com</span>
                </div>
                </div>

                <button>Top Me</button>

                <div className="comment">
                  <span>comments(33)</span>
                <BsChevronDown/>
                </div>
    </div>
  );
}

export default CampaignInfo ;
