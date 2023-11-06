import React from 'react'
import './createSupport.scss'
import SendIcon from '../../assets/send.png'
import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Widget from '../../components/widgets/Widget'
import Stats from '../../components/stats/Stats'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {BsChevronDown} from 'react-icons/bs'
import {BiArrowBack} from 'react-icons/bi'

function CreateSupport() {
  return (
    <div className='CreateSupport'>
          <div className="CreateSupport-Left">
          <Leftbar />
        </div>
        <div className="CreateSupport-Center">

          <div className="supportTop">
          <Widget />
          <Stats />
          </div>
          
          

          <div className="CreateSupport-post" >
            <div className="header">
              <h3>CREATE ANGEL SUPPORT</h3>
              <AiOutlineCloseCircle className="icon" />
            </div>
            <div className="mobileSupport">
              <Topbar/>
              <div className="mobileHeader">
              <BiArrowBack className='mobileIcon'/>
              <h3 className='mobiletext'>create angel support</h3>
            </div>
            </div>
           
              

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