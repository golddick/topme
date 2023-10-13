
import React  from 'react';
import { useState } from 'react';
import './campaignBox.scss';
import { FaShare } from 'react-icons/fa';
import {PiShareFat} from 'react-icons/pi'
import {BsGift} from 'react-icons/bs'
import Comment from '../CommentTab/Comment';
import TruncateBio from '../../pages/campaignDetails/TruncateBio/TruncateBio';

function CampaignBox() {



  const campaignImg = [
    {
      impactImg:
        'https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=',
      impactName: 'Theresa Ubong',
      impactBio:
        'Life is to be lived now; not yesterday, not tomorrow but today! Let’s help others make this a reality, please',
    },
    {
      impactImg:
        'https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=',
      impactName: 'Theresa Ubong',
      impactBio:
        'Life is to be lived now; not yesterday, not tomorrow but today! Let’s help others make this a reality, please',
    },
    {
      impactImg:
        'https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=',
      impactName: 'Theresa Ubong',
      impactBio:
        'Life is to be lived now; not yesterday, not tomorrow but today! Let’s help others make this a reality, please',
    },
    {
      impactImg:
        'https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=',
      impactName: 'Theresa Ubong',
      impactBio:
        'Life is to be lived now; not yesterday, not tomorrow but today! Let’s help others make this a reality, please',
    },
    {
      impactImg:
        'https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=',
      impactName: 'Theresa Ubong',
      impactBio:
        'Life is to be lived now; not yesterday, not tomorrow but today! Let’s help others make this a reality, please',
    },
  ];
  const maxImagesToShow = 3;
  const displayedImages = campaignImg.slice(0, maxImagesToShow);
  const remainingImages = campaignImg.length - maxImagesToShow;


  return (
    <div className="CampaignBox">
      <div className="c_topBox">
        <div className="cTop">
          <span>update</span>
          <div className="share">
            share <FaShare/>    
          </div>
          <PiShareFat className="shareIcon"/>
        </div>
        <div className="c_info">
          <span>2/3/2023</span>
          <b>.</b>
          <span>5 days ago</span>

          <span>Lagos, Nigeria</span>
        </div>
      </div>

        <div className="image-gallery">
            <div className="galleryTop">
                <img src="https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=" alt="" />
                <img src="https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=" alt="" />
            </div>
            <div className="galleryBottom">
                <img src="https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=" alt="" />
            </div>

        </div>
        <div className="donTrack">
        <h3>DONATION SO FAR:</h3>
        <span>$20,00</span>
        <h3>DONATION TARGET:</h3>
        <span>$20,00</span>
      </div>
        <div className="webTrun"><TruncateBio/></div>
                <button className='_topMe'> <BsGift className='MobTop'/> Top Me</button>
                <div className="mobiletrun"><TruncateBio/></div>
                <Comment/>
    </div>
  );
}

export default CampaignBox;

