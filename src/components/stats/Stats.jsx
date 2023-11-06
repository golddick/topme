import './stat.scss'

function Stats() {
  return (
    <div className='stats'>
      <div className="statsWrapper">
      <div className="left">
        <span>Total Expected expenitures</span>
        <div className="statsAmount">
      <p>$</p>
      <span>20,000</span>
     </div>
        </div>
        <div className="vertical-line"></div>
      <div className="center">
      <span>Total Expected expenitures</span>
     <div className="statsAmount">
      <p>$</p>
      <span>22,000</span>
     </div>
      </div>
      <div className="vertical-line"></div>
      <div className="right">
      <span>Total Expected expenitures</span>
      <div className="statsAmount">
      <p>$</p>
      <span>12,000</span>
     </div>
      </div> 
      </div>
    </div>
  )
}

export default Stats
