

import React,{useState , useEffect, useRef  } from 'react';
import { BsGift } from 'react-icons/bs';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import {RiAddBoxLine} from 'react-icons/ri';
import {BsHeart} from 'react-icons/bs'
// import VerticalProgressbar from '../../components/Progressbar/Progressbar';
import ProgressBar from '../../components/Progressbar/Progressbar';
import PostStatus from '../postLink/PostStatus';
import ShareContainer from '../ShareContainer/ShareContainer';
import './post.scss'
import { NavLink, useNavigate } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

function Post() {

  const history = useNavigate();
 
  const redirectToPage = () => {
    history('/CampaignDetails')
    console.log('Large View div clicked');
  };

  const OpenPayment = () => {
      // Prevent the click event from propagating to the parent div
  event.stopPropagation();
    history('Payment')
  }


  const posts = [
    {
      featuredpost: 'featured post',
      status: 'Ongoing',
      postheader: 'Help build a legacy for the Makoko kids.',
      postimg: 'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
      postbio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...',
    },
    {
      featuredpost: '',
      status: 'Completed',
      postheader: 'Help build a legacy for the Makoko kids.',
      postimg: 'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
      postbio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
    },
    {
      featuredpost: '',
      status: 'Ongoing',
      postheader: 'Help build a legacy for the Makoko kids.',
      postimg: 'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
      postbio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...',
    },
    {
      featuredpost: 'featured post',
      status: 'completed',
      postheader: 'Help build a legacy for the Makoko kids.',
      postimg: 'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
      postbio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...',
    },
  ];

  const [showShare, setShowShare] = useState(Array(posts.length).fill(false));
  const popupRefs = useRef(posts.map(() => React.createRef()));

  const handleShareClick = (index) => {
    setShowShare((prevShowShare) => {
      const newShowShare = [...prevShowShare];
      newShowShare[index] = !newShowShare[index];
      return newShowShare;
    });
  };

  const closePopup = (index) => {
    setShowShare((prevShowShare) => {
      const newShowShare = [...prevShowShare];
      newShowShare[index] = false;
      return newShowShare;
    });
  };

  useEffect(() => {
    function handleClickOutside(event, index) {
      if (popupRefs.current[index].current && !popupRefs.current[index].current.contains(event.target)) {
        closePopup(index);
      }
    }

    showShare.forEach((isOpen, index) => {
      if (isOpen) {
        document.addEventListener('mousedown', (event) => handleClickOutside(event, index));
      } else {
        document.removeEventListener('mousedown', (event) => handleClickOutside(event, index));
      }
    });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShare]);

  return (
    <div className="post">
      <PostStatus />
      {posts.map((post, index) => (
        // <div key={index} className={`postItem ${post.featuredpost ? 'featuredPost' : 'noFeaturePost'}`}>
        <div key={index}>
          <div className="postStat">
            <div className="right">
              <div className="top">
                {post.featuredpost && <span className="fPost">{post.featuredpost}</span>}
                <span className={`status-${post.status.toLowerCase().replace(' ', '-')}${post.featuredpost ? '' : ' nofeaturedpost'}`}>
                  {post.status}
                </span>
              </div>
              <div className="postTime">
                <div className="thread">+2 threads</div>
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
              {showShare[index] && <ShareContainer closeshareConterner ={popupRefs.current[index]}  />}
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="20" viewBox="0 0 6 20" fill="none" className='dotIcon' onClick={() => handleShareClick(index)}>
            <path d="M5.5 16.75C5.5 18.27 4.27 19.5 2.75 19.5C1.23 19.5 -5.3765e-08 18.27 -1.20206e-07 16.75C-1.86648e-07 15.23 1.23 14 2.75 14C4.27 14 5.5 15.23 5.5 16.75ZM1.5 16.75C1.5 17.0815 1.6317 17.3995 1.86612 17.6339C2.10054 17.8683 2.41848 18 2.75 18C3.08152 18 3.39946 17.8683 3.63388 17.6339C3.8683 17.3995 4 17.0815 4 16.75C4 16.4185 3.8683 16.1005 3.63388 15.8661C3.39946 15.6317 3.08152 15.5 2.75 15.5C2.41848 15.5 2.10054 15.6317 1.86612 15.8661C1.6317 16.1005 1.5 16.4185 1.5 16.75ZM5.5 2.75C5.5 4.27 4.27 5.5 2.75 5.5C1.23 5.5 -6.65724e-07 4.27 -7.32166e-07 2.75C-7.98607e-07 1.23 1.23 -5.3765e-08 2.75 -1.20206e-07C4.27 -1.86648e-07 5.5 1.23 5.5 2.75ZM1.5 2.75C1.5 3.08152 1.6317 3.39946 1.86612 3.63388C2.10054 3.86831 2.41848 4 2.75 4C3.08152 4 3.39946 3.86831 3.63388 3.63388C3.8683 3.39946 4 3.08152 4 2.75C4 2.41848 3.8683 2.10054 3.63388 1.86612C3.39946 1.63169 3.08152 1.5 2.75 1.5C2.41848 1.5 2.10054 1.63169 1.86612 1.86612C1.6317 2.10054 1.5 2.41848 1.5 2.75ZM5.5 9.75C5.5 11.27 4.27 12.5 2.75 12.5C1.23 12.5 -3.59745e-07 11.27 -4.26186e-07 9.75C-4.92627e-07 8.23 1.23 7 2.75 7C4.27 7 5.5 8.23 5.5 9.75ZM1.5 9.75C1.5 10.0815 1.6317 10.3995 1.86612 10.6339C2.10054 10.8683 2.41848 11 2.75 11C3.08152 11 3.39946 10.8683 3.63388 10.6339C3.8683 10.3995 4 10.0815 4 9.75C4 9.41848 3.8683 9.10054 3.63388 8.86612C3.39946 8.6317 3.08152 8.5 2.75 8.5C2.41848 8.5 2.10054 8.6317 1.86612 8.86612C1.6317 9.10054 1.5 9.41848 1.5 9.75Z" fill="black"/>
          </svg>
            
            </div>
          </div>

          <div className="postStory">
            <p>{post.postheader}</p>

            <div className="center">
              {/* <NavLink to='' className='navlink'>
              <img src={post.postimg} alt="" />
              </NavLink> */}
              <div className="storyTop" style={{ backgroundImage: `url(${post.postimg})` }} onClick={redirectToPage}>
                <div className="postStoryTop">
                  <div className="topStory">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="storyicon">
                      <path d="M7.08377 19.9898C6.55983 20.1644 6.27667 20.7307 6.45132 21.2547C6.62596 21.7786 7.19228 22.0618 7.71623 21.8871L7.08377 19.9898ZM13.6308 21.3538L13.54 20.358L13.6308 21.3538ZM17.3692 20.5231L17.8078 21.4218L17.3692 20.5231ZM20.9414 17.2735L20.1643 16.6441L20.1643 16.6441L20.9414 17.2735ZM18.4982 15.2402L19.2053 15.9473L18.4982 15.2402ZM16.8531 16.8854L17.5602 17.5925L16.8531 16.8854ZM12.3846 16.6154C11.8323 16.6154 11.3846 17.0631 11.3846 17.6154C11.3846 18.1677 11.8323 18.6154 12.3846 18.6154V16.6154ZM20.5616 15.0359L20.0069 15.868L20.5616 15.0359ZM8.66441 14.4909L9.11163 15.3853L9.11163 15.3853L8.66441 14.4909ZM13.136 14.0818L13.3991 13.1171L13.136 14.0818ZM14.8822 14.5581L14.619 15.5228L14.8822 14.5581ZM15.4354 16.6415L14.7283 15.9344L15.4354 16.6415ZM13.7544 16.9083C13.3639 17.2988 13.3639 17.932 13.7544 18.3225C14.145 18.713 14.7781 18.713 15.1686 18.3225L13.7544 16.9083ZM7.71623 21.8871C7.83298 21.8482 8.08433 21.82 8.53607 21.8522C8.96739 21.883 9.47135 21.9585 10.0487 22.0492C11.1445 22.2213 12.5316 22.4581 13.7215 22.3497L13.54 20.358C12.653 20.4388 11.5478 20.2602 10.359 20.0734C9.79403 19.9847 9.20761 19.895 8.67835 19.8573C8.16952 19.821 7.59009 19.821 7.08377 19.9898L7.71623 21.8871ZM13.7215 22.3497C14.4854 22.2801 15.1376 22.247 15.7384 22.1383C16.3897 22.0204 17.0004 21.8158 17.8078 21.4218L16.9307 19.6244C16.2513 19.9559 15.8165 20.0916 15.3822 20.1702C14.8972 20.258 14.4236 20.2775 13.54 20.358L13.7215 22.3497ZM17.8078 21.4218C18.5913 21.0394 19.3468 20.423 19.9959 19.7993C20.6547 19.1664 21.2528 18.4779 21.7185 17.9029L20.1643 16.6441C19.7299 17.1805 19.189 17.8011 18.6102 18.3571C18.0218 18.9225 17.4414 19.3752 16.9307 19.6244L17.8078 21.4218ZM17.7911 14.5331L16.1459 16.1783L17.5602 17.5925L19.2053 15.9473L17.7911 14.5331ZM15.0907 16.6154H12.3846V18.6154H15.0907V16.6154ZM16.1459 16.1783C15.8661 16.4582 15.4865 16.6154 15.0907 16.6154V18.6154C16.0169 18.6154 16.9052 18.2474 17.5602 17.5925L16.1459 16.1783ZM21.1163 14.2039C20.0711 13.5071 18.6794 13.6449 17.7911 14.5331L19.2053 15.9473C19.4195 15.7332 19.7549 15.7 20.0069 15.868L21.1163 14.2039ZM21.7185 17.9029C22.6912 16.7018 22.3249 15.0096 21.1163 14.2039L20.0069 15.868C20.3137 16.0726 20.3379 16.4297 20.1643 16.6441L21.7185 17.9029ZM2.83077 14.4615H6.15385V12.4615H2.83077V14.4615ZM5.98462 14.2923V21.7692H7.98462V14.2923H5.98462ZM6.15385 21.6H2.83077V23.6H6.15385V21.6ZM3 21.7692V14.2923H1V21.7692H3ZM2.83077 21.6C2.92423 21.6 3 21.6758 3 21.7692H1C1 22.7803 1.81967 23.6 2.83077 23.6V21.6ZM5.98462 21.7692C5.98462 21.6758 6.06038 21.6 6.15385 21.6V23.6C7.16495 23.6 7.98462 22.7803 7.98462 21.7692H5.98462ZM6.15385 14.4615C6.06038 14.4615 5.98462 14.3858 5.98462 14.2923H7.98462C7.98462 13.2812 7.16495 12.4615 6.15385 12.4615V14.4615ZM2.83077 12.4615C1.81966 12.4615 1 13.2812 1 14.2923H3C3 14.3858 2.92423 14.4615 2.83077 14.4615V12.4615ZM7.84721 16.0175L9.11163 15.3853L8.2172 13.5964L6.95279 14.2286L7.84721 16.0175ZM11.2651 14.8769H11.6058V12.8769H11.2651V14.8769ZM12.8728 15.0466L14.619 15.5228L15.1453 13.5933L13.3991 13.1171L12.8728 15.0466ZM14.7283 15.9344L13.7544 16.9083L15.1686 18.3225L16.1425 17.3486L14.7283 15.9344ZM14.619 15.5228C14.8014 15.5726 14.862 15.8007 14.7283 15.9344L16.1425 17.3486C17.3621 16.1291 16.8092 14.0471 15.1453 13.5933L14.619 15.5228ZM11.6058 14.8769C12.0338 14.8769 12.4599 14.934 12.8728 15.0466L13.3991 13.1171C12.8147 12.9577 12.2116 12.8769 11.6058 12.8769V14.8769ZM9.11163 15.3853C9.78027 15.051 10.5176 14.8769 11.2651 14.8769V12.8769C10.2071 12.8769 9.16355 13.1233 8.2172 13.5964L9.11163 15.3853ZM16.7846 7.64615C16.7846 8.92915 15.7445 9.96923 14.4615 9.96923V11.9692C16.8491 11.9692 18.7846 10.0337 18.7846 7.64615H16.7846ZM14.4615 9.96923C13.1785 9.96923 12.1385 8.92915 12.1385 7.64615H10.1385C10.1385 10.0337 12.074 11.9692 14.4615 11.9692V9.96923ZM12.1385 7.64615C12.1385 6.36315 13.1785 5.32308 14.4615 5.32308V3.32308C12.074 3.32308 10.1385 5.25858 10.1385 7.64615H12.1385ZM14.4615 5.32308C15.7445 5.32308 16.7846 6.36315 16.7846 7.64615H18.7846C18.7846 5.25858 16.8491 3.32308 14.4615 3.32308V5.32308ZM11.1385 6.64615C9.85546 6.64615 8.81538 5.60608 8.81538 4.32308H6.81538C6.81538 6.71065 8.75089 8.64615 11.1385 8.64615V6.64615ZM8.81538 4.32308C8.81538 3.04008 9.85546 2 11.1385 2V0C8.75089 0 6.81538 1.93551 6.81538 4.32308H8.81538ZM11.1385 2C12.4215 2 13.4615 3.04008 13.4615 4.32308H15.4615C15.4615 1.93551 13.526 0 11.1385 0V2Z" fill="white"/>
                    </svg>
                      donation so far: <b>$10,000</b>
                    </span>
                    <span>
                      <BsGift className="storyicon" /> donation Target: <b>$21,000</b>
                    </span>
                  </div>

                  <div className="progressbar">
                  <ProgressBar percentage ={50} /> 
                  </div>
                </div>

                <div className="storyCenter">
                  {/* <div className='navlink' onClick={OpenPayment}> */}
                  <NavLink to='/Payment' className='navlink'>
                  <button>Top Me</button>
                  </NavLink>
               
                  <div className="likeBtn">
                    <BsHeart className='LikeIcon' />
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
