import './editprofile.scss'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {BiPencil} from 'react-icons/bi'
function Editprofile() {
  return (
    <div className='editprofile'>
        <div className="edit">
            <img src="https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=" 
             alt="" />
            <form >
                <span>Full Name</span>
                <div className="fName">
                <input type="text"  />
                    <BiPencil className='editIcon'/>
                </div>
                <span>Bio</span>
                <div className="bio">
                <input type="text"  />
                    <BiPencil className='editIcon'/>
                </div>
                <span>NIN</span>
                <div className="nin">
                <input type="number"  />
                    <AiOutlineEyeInvisible className='editIcon'/>
                </div>
                <span>Phone Number</span>
                <div className="pNumber">
                <input type="number"  />
                    <BiPencil className='editIcon'/>
                </div>
                <span>Email</span>
                <div className="email">
                <input type="email"  />
                    <BiPencil className='editIcon'/>
                </div>
                <span>Location</span>
                <div className="location">
                <input type="text"  />
                    <BiPencil className='editIcon'/>
                </div>

                    <button>request update </button>
            </form>
        </div>
    </div>
  )
}

export default Editprofile