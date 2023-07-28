import './notification.scss'

function Notifiction() {


  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className='Notifiction'>
               <div className="popup">
          <div className="popup-content">
            <h3>Notification</h3>
            <p>This is a notification message.</p>
            <p>This is a sample notification.</p>
            <h3>New Notification</h3>
            <p>This is a sample notification.</p>
            <h3>New Notification</h3>
            <p>This is a sample notification.</p>
            <h3>New Notification</h3>
            <p>This is a sample notification.</p>
            <h3>New Notification</h3>
            <p>This is a sample notification.</p>
            <h3>New Notification</h3>
            <p>This is a sample notification.</p>
            <h3>New Notification</h3>
            <p>This is a sample notification.</p>
            <h3>New Notification</h3>
            <p>This is a sample notification.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
        
        </div>
  )
}

export default Notifiction