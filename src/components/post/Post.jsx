// import React,{useState , useEffect, useRef  } from 'react';
// import { BsGift } from 'react-icons/bs';
// import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { CiLocationOn } from 'react-icons/ci';
// import {RiAddBoxLine} from 'react-icons/ri';
// import {BsHeart} from 'react-icons/bs'
// import VerticalProgressbar from '../../components/Progressbar/Progressbar';
// import PostStatus from '../postLink/PostStatus';
// import ShareContainer from '../ShareContainer/ShareContainer';
// import './post.scss'


// function Post() {


//   const [showShare, setShowShare] = useState(false);
//   const popupRef = useRef(null);
//   const handleClick = () => setShowShare(true)


//   const closePopup = () => {
//     setShowShare(false);
//   };
//  // Add an event listener to the document to handle clicks outside the popup
//  useEffect(() => {
//   function handleClickOutside(event) {
//     if (popupRef.current && !popupRef.current.contains(event.target)) {
//       closePopup();
//     }
//   }

//   if (showShare) {
//     document.addEventListener('mousedown', handleClickOutside);
//   } else {
//     document.removeEventListener('mousedown', handleClickOutside);
//   }

//   return () => {
//     document.removeEventListener('mousedown', handleClickOutside);
//   };
// }, [showShare]);


//   const posts = [
//     {
//       featuredpost: 'featured post',
//       status: 'Ongoing',
//       postheader: 'Help build a legacy for the Makoko kids.',
//       postimg:
//         'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
//       postbio:
//         'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
//     },
//     {
//       featuredpost: '',
//       status: 'Completed',
//       postheader: 'Help build a legacy for the Makoko kids.',
//       postimg:
//         'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
//       postbio:
//         'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
//     },
//     {
//       featuredpost: '',
//       status: 'Ongoing',
//       postheader: 'Help build a legacy for the Makoko kids.',
//       postimg:
//         'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
//       postbio:
//         'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
//     },
//     {
//       featuredpost: 'featured post',
//       status: 'completed',
//       postheader: 'Help build a legacy for the Makoko kids.',
//       postimg:
//         'https://mahb.stanford.edu/wp-content/uploads/2020/06/child-education-learning-school-baby-family-people-girl-classroom.jpg',
//       postbio:
//         'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo...',
//     },
//   ];

  

//   return (
//     <div className="post">
//       <PostStatus/>
//       {posts.map((post, index) => (
//         <div key={index} className={`postItem ${post.featuredpost ? 'featuredPost' : 'noFeaturePost'}`}>
//           <div className="postStat">
//             <div className="right">
//               <div className="top">
//               {post.featuredpost && <span className="fPost">{post.featuredpost}</span>}
//               <span
//                   className={`status-${post.status.toLowerCase().replace(' ', '-')}${post.featuredpost ? '' : ' nofeaturedpost'}`}
//                 >
//                   {post.status}
//                 </span>
//               </div>
//               <div className="postTime">
//                 <div className="thread">
//                   +2 threads
//                 </div>  
//                 <span className="dot">.</span>
//                 <span>19/04/2023</span>
//                 <span className="dot">.</span>
//                 <span>1 month ago</span>
//                 <span className="dot">.</span>
             
//                 <span>
//                   <CiLocationOn className="icon" />
//                   Lagos, Nigeria
//                 </span>
//               </div>
//             </div>
            
//             <div className="statleft">
//             {
//                 showShare &&(<ShareContainer closeshareConterner ={popupRef}/>)
//               }
//               <BsThreeDotsVertical className='dotIcon' onClick={handleClick} />
//             </div>
//           </div>

//           <div className="postStory">
          
//               <p>{post.postheader}</p>
            
//         <div className="center">
//               <img src={post.postimg} alt="" />

//               <div className="storyTop">
//               <div className="postStoryTop">
//               <div className="topStory">
//                 <span>
//                   <BsGift className="storyicon" style={{fontSize:'20px' }}/> donation so far: <b>$10,000</b>
//                 </span>
//                 <span>
//                   <BsGift className="storyicon" /> donation Target: <b>$21,000</b>
//                 </span>
//               </div>

//               <div className="progressbar">
//                   <VerticalProgressbar/>
//                 </div>
//               </div>
              
//               <div className="storyCenter">
//                 <button>Top Me</button>
//               <div className="likeBtn">
//                 <BsHeart className='LikeIcon'/>
//                 <span>12 Likes</span>
//               </div>

//               </div>
//               <div className="down">
//                 <p>{post.postbio}</p>
//               </div>
//             </div>
//             </div>
           
//         </div>
//           </div>
//       ))}
//     </div>
//   );
// }

// export default Post;



import React,{useState , useEffect, useRef  } from 'react';
import { BsGift } from 'react-icons/bs';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import {RiAddBoxLine} from 'react-icons/ri';
import {BsHeart} from 'react-icons/bs'
import VerticalProgressbar from '../../components/Progressbar/Progressbar';
import PostStatus from '../postLink/PostStatus';
import ShareContainer from '../ShareContainer/ShareContainer';
import './post.scss'
import { NavLink } from 'react-router-dom';

function Post() {
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
      postbio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...',
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
        <div key={index} className={`postItem ${post.featuredpost ? 'featuredPost' : 'noFeaturePost'}`}>
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
              <BsThreeDotsVertical className='dotIcon' onClick={() => handleShareClick(index)} />
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
                      <BsGift className="storyicon" /> donation so far: <b>$10,000</b>
                    </span>
                    <span>
                      <BsGift className="storyicon" /> donation Target: <b>$21,000</b>
                    </span>
                  </div>

                  <div className="progressbar">
                    <VerticalProgressbar />
                  </div>
                </div>

                <div className="storyCenter">
                  <NavLink to="/Payment" className='navlink'>
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
