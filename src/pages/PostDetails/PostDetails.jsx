import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Slider from "react-slick";
 import AngelFooter from '../../components/homepage/footer/AngelFooter';
import './postdetails.scss'
import Sidebar from "../../components/leftbar/Sidebar";
import Hometop from '../../components/homepage/HomeTop/Hometop';
import Postinfo from "../../components/post/PostInfo";
import { FaEnvelope } from "react-icons/fa";
import { BsPersonCheck } from "react-icons/bs";
import { MdQueryStats, MdOutlineVolunteerActivism } from "react-icons/md";
import "react-html5video/dist/styles.css";
import YouTube from 'react-youtube';
import {TbShare3} from 'react-icons/tb'
import { TiLocationOutline } from "react-icons/ti";

 
function getVideoIdFromUrl(url) {
  // Extract the video ID from the YouTube URL
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[7]) ? match[7] : '';
}

function PostDetails() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const youtubeLinkUrl = 'https://www.youtube.com/watch?v=MhBYWBu9-9Q';
  const videoId = getVideoIdFromUrl(youtubeLinkUrl);

const opts = {
  height: '400',
  width: '800px',
  borderRadius: '10px',
  playerVars: {
  controls: 1,
  autoplay: 0,
  },
};


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
        {showFullContent ? content : truncateContent(content, 100)}
      </p>
      {content.split(' ').length > 50 && (
        <button onClick={toggleContent}>
          {showFullContent ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}



  return (
    <div className="D_profile" >
      <Hometop   />
      <div className="profileWrapper">
        <div className="profileLeft">
          <Sidebar />
        </div>
        <div className="profileCenter">
          <Postinfo/>
 
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

           <TruncatedContent content="   
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

      <div className="videos">
    <YouTube videoId={videoId} opts={opts} />
    </div>

          <div className="postbio">
            <span>Help build a legacy for the Makoko kids.</span>
            <p>
              A Short film of the life of children living in Makoko, Lagos and
              what Theresa Ubong and Kings A Short film of the life of children
              living in Makoko, Lagos and what Theresa Ubong and Kings
            </p>
          </div>

          <button className="btn">donate</button>

          <div className="horizontal-line"></div>

          <div className="cont">
            <div className="left">
              <span className="update">update</span>
            </div>
            <div className="right">
              <span>
                Share <TbShare3/>
              </span>
            </div>
          </div>
          <div className="down">
            <span>19/04/2023</span>
            <span className="dot">.</span>
            <span>1 month ago</span>
            <span className="dot">.</span>
            <span>Duration 6 months</span>
            <span className="dot">.</span>
            <span>
              <TiLocationOutline className="icon" /> Lagos, Nigeria
            </span>
          </div>

              <Slider {...settings} className="postImg">

              
              <div className="imageWrapper"><img className="img" src=" https://tradecorp.com.es/en/wp-content/uploads/2020/11/zach-vessels-jLbmY5Zp7UQ-unsplash-1-scaled.jpg" alt="" /></div>
              <div className="imageWrapper"><img className="img" src="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" /></div>
              <div className="imageWrapper"><img className="img" src="https://media.istockphoto.com/id/972902010/photo/brazilian-boy-smiling.jpg?s=612x612&w=0&k=20&c=ALUJXfPS7_HV_khXC7PwMDEHaBPxttY8BcalDpEmlxA=" alt="" /></div>
              <div className="imageWrapper"><img className="img" src="https://tradecorp.com.es/en/wp-content/uploads/2020/11/zach-vessels-jLbmY5Zp7UQ-unsplash-1-scaled.jpg" alt="" /></div>
              <div className="imageWrapper"><img className="img" src="https://media.istockphoto.com/id/972902010/photo/brazilian-boy-smiling.jpg?s=612x612&w=0&k=20&c=ALUJXfPS7_HV_khXC7PwMDEHaBPxttY8BcalDpEmlxA=" alt="" /></div>
              <div className="imageWrapper"><img className="img" src="https://media.istockphoto.com/id/972902010/photo/brazilian-boy-smiling.jpg?s=612x612&w=0&k=20&c=ALUJXfPS7_HV_khXC7PwMDEHaBPxttY8BcalDpEmlxA=" alt="" /></div>
                </Slider>
  
          <TruncatedContent content="
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
          <button className='btn'>donate</button>


         
        </div> 
{/*        
       <div className="profileRight">
      <div className="rightContent">

      </div>
       </div> */}
      </div>
      
   
          <div className="bottom" >
              <FaEnvelope className='icon'/>
          </div> 
          
  
        <AngelFooter/>
    </div>
  );
}

export default PostDetails;
