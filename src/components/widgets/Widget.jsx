import './widget.scss'

function Widget() {
  return (
    <div className='widget'>
   <div className="widgetWrapper">
        <div className="widgetInfo">
        <div className="topcircle">   <span>Open Campaign(s)</span><div className="innerCircle"></div></div>
     <div className="centerInfo">
       <p>6+</p>
     </div>
       <div className="buttom-circle"><div className="inner-Circle"></div></div>
        </div>
        
   </div>
   <div className="widgetWrapper">
        <div className="widgetInfo">
        <div className="topcircle"><span>Closed Campaign(s)</span><div className="innerCircle"> </div></div>
       <div className="centerInfo">
       
       <p>10 +</p>
       </div>
       <div className="buttom-circle"><div className="inner-Circle"></div></div>
        </div>
        
   </div>
   <div className="widgetWrapper">
        <div className="widgetInfo">
          <div className="topcircle"> <span>Decline Campaign(s) </span><div className="innerCircle"></div></div>
     <div className="centerInfo">
       <p className='num'>6 +</p>
     </div>
       <div className="buttom-circle"><div className="inner-Circle"></div></div>
        </div>
        
   </div>
   <div className="widgetWrapper">
        <div className="widgetInfo">
        <div className="topcircle"><span>Campaign awaiting <br/>approval </span><div className="innerCircle"></div></div>
      <div className="centerInfo">
       <p>6 +</p>   
      </div>
       <div className="buttom-circle"><div className="inner-Circle"></div></div>
        </div> 
        
   </div>
     </div>
     
  )
}

export default Widget
