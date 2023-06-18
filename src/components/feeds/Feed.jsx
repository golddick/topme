import './feed.scss'
import Widget from '../widgets/Widget'
import Stats from '../stats/Stats'
import Share from '../share/Share'
import Post from '../post/Post'
import Link from '../postLink/link'


function Feed() {
  return (
    <div className='feed' >
    <div className="widgets">
      <Widget/>
    </div>
    <div className="stats">
      <Stats/>
    </div>
    {/* <div className="share">
    <Share/>
    </div> */}
    <div className="post">
    <Link/>
    <Post/>
    </div>
    </div>
  )
}

export default Feed