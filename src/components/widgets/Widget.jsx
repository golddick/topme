import './widget.scss'

function Widget() {
  return (
    <div className='widget'>
   <div className="widgetWrapper">
   <img src="https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/2021-07/Ethiopia-UN0418425.jpg?itok=7wJB8CbZ"
       alt="" />
        <div className="widgetInfo">
       <span>Open Campaign(s)</span>
       <p>6 +</p>
       <button>View All</button>
        </div>
        
   </div>
   <div className="widgetWrapper">
   <img src="https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/2021-07/Ethiopia-UN0418425.jpg?itok=7wJB8CbZ"
       alt="" />
        <div className="widgetInfo">
       <span>Closed Campaign(s)</span>
       <p>10 +</p>
       <button>View All</button>
        </div>
        
   </div>
   <div className="widgetWrapper">
   <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/20/09/children-0.jpg"
       alt="" />
        <div className="widgetInfo">
       <span>Campaign awaiting <br/>approval </span>
       <p className='num'>6 +</p>
       <button className='btn'>View All</button>
        </div>
        
   </div>
   <div className="widgetWrapper">
   <img src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
       alt="" />
        <div className="widgetInfo">
       <span>Decline Campaign(s) </span>
       <p>6 +</p>
       <button>View All</button>
        </div>
        
   </div>
     </div>
     
  )
}

export default Widget
