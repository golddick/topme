import React, { useState } from 'react';
import './link.scss'
import {  NavLink } from 'react-router-dom';


function PostStatus() {




  return (
    <div className="PostStatus">
    <div className="causes">
       <span>Ongoing Causes</span>
       <div className="activebar"></div>
       </div>
    <div className="causes"> <span>Completed Causes</span></div>
    <div className="causes"> <span>All Causes</span></div>
   </div>
  ) 
}

export default PostStatus