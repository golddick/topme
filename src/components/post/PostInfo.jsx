import './post.scss'
import { BsGift } from 'react-icons/bs';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { TbShare3 } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
// import Progressbar from '../Progressbar/Progressbar';
import React, { useState,useEffect } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'


function Post() {


  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(Math.random()*100);
    },3000);
    return () => {
      clearInterval(id);
    }
  }, []);

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
    <div className="post">
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
                <span>19/04/2023</span>
                <span className="dot">.</span>
                <span>1 month ago</span>
                <span className="dot">.</span>
                <span>Duration 6 months</span>
                <span className="dot">.</span>
                <span>
                  <CiLocationOn className="icon" />
                  Lagos, Nigeria
                </span>
              </div>
            </div>
            <div className="left">
              <span>
                Share <TbShare3 />
              </span>
            </div>
          </div>

          <div className="postStory">
            <div className="top">
              <p>{post.postheader}</p>
            </div>
            <div className="center">
              <img src={post.postimg} alt="" />
            </div>
            <div className="storyTop">
              <div className="top">
                <span>
                  <VolunteerActivismOutlinedIcon className="icon" /> donation so far: <b>$10,000</b>
                </span>
                <span>
                  <BsGift className="icon" /> donation Target: <b>$21,000</b>
                </span>
              </div>
              {/* <div className="down" style={{margin:'0' , padding:'0', alignSelf: 'flex-start' }}>
              <Progressbar value={progress}/>
              </div> */}
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default Post;
