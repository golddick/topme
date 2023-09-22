import React from 'react';
import { BsGift } from 'react-icons/bs';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import {RiAddBoxLine} from 'react-icons/ri';
import {BsHeart} from 'react-icons/bs'
import VerticalProgressbar from '../../components/Progressbar/Progressbar';
import './post.scss'


function Post() {
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
    {
      featuredpost: '',
      status: 'Completed',
      postheader: 'Help build a legacy for the Makoko kids.',
      postimg:
        'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
      postbio:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
    },
    {
      featuredpost: '',
      status: 'Ongoing',
      postheader: 'Help build a legacy for the Makoko kids.',
      postimg:
        'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
      postbio:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
    },
    {
      featuredpost: 'featured post',
      status: 'completed',
      postheader: 'Help build a legacy for the Makoko kids.',
      postimg:
        'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
      postbio:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
    },
  ];

  

  return (
    <div className="post">
      <div className="PostStatus">
       <div className="causes"> <span>Ongoing Causes</span></div>
       <div className="causes"> <span>Completed Causes</span></div>
       <div className="causes"> <span>All Causes</span></div>
      </div>
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

              <div className="storyTop">
              <div className="postStoryTop">
              <div className="topStory">
                <span>
                  <VolunteerActivismOutlinedIcon className="icon" /> donation so far: <b>$10,000</b>
                </span>
                <span>
                  <BsGift className="icon" /> donation Target: <b>$21,000</b>
                </span>
              </div>

              <div className="progressbar">
                  <VerticalProgressbar/>
                </div>
              </div>
              
              <div className="storyCenter">
                <button>Top Me</button>
              <div className="likeBtn">
                <BsHeart className='LikeIcon'/>
                <span>12 Likes</span>
              </div>

              </div>
              <div className="down">
                <p>{post.postbio}</p>
              </div>
            </div>
            </div>
           
        </div>
          </div>
      ))}
    </div>
  );
}

export default Post;
