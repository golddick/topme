import React from 'react'
import './createSupport.scss'
import SendIcon from '../../assets/send.png'
import Leftbar from '../../components/leftbar/Leftbar'
import Widget from '../../components/widgets/Widget'
import Stats from '../../components/stats/Stats'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {BsChevronDown} from 'react-icons/bs'

function CreateSupport() {
  return (
    <div className='CreateSupport'>
          <div className="CreateSupport-Left">
          <Leftbar />
        </div>
        <div className="CreateSupport-Center">
          
          <Widget />
          <Stats />

          <div className="CreateSupport-post" >
            <div className="header">
              <h3>CREATE ANGEL SUPPORT</h3>
              <AiOutlineCloseCircle className="icon" />
            </div>
              

            <div className="horizontal" ></div>
            <div className='form'>
              <span>Description</span>
              <textarea id="description" name="description" rows="100" cols="100" className='input'></textarea>            
            </div>
            <div className="horizontal"></div>
            <div className="postInfo">
              <div className="amount">
                <span >Total amount needed: </span>
                <input type="text"/>
              </div>
              <div className="selectcause">
              <span className='textCause'>cause </span>
                <input type="text"/>
                <BsChevronDown/>
              </div>
               
                <button>  <img src={SendIcon} alt="" />post</button>

            
            </div>
          </div>
     
          
        </div>
    </div>
  )
}

export default CreateSupport