import React from 'react'
import YouTube from 'react-youtube';
import './Youtubetab.scss'


function getVideoIdFromUrl(url) {
    // Extract the video ID from the YouTube URL
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7]) ? match[7] : '';
  }
function YoutubeTab() {

    const youtubeLinkUrl = 'https://www.youtube.com/watch?v=MhBYWBu9-9Q';
  const videoId = getVideoIdFromUrl(youtubeLinkUrl);

  const opts = {
    playerVars: {
    controls: 1,
    autoplay: 0,
    },
  };
  return (
    <div className="campaingVideo">
                <YouTube videoId={videoId} opts={opts} className='youTube'/>
                <div className="videoInfo">
                  <h3>Help build a legacy for the Makoko kids.</h3>
                  <p>A Short film of the life of children living in Makoko, Lagos and what Theresa Ubong and Kings...</p>
                  <span>www.youtube.com</span>
                </div>
                </div>

  )
}

export default YoutubeTab