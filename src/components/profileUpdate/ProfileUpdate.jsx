import './profileupdate.scss';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import Add from '../../assets/addimage.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileUpdate() {
  // Retrieve user data from local storage
  const storedData = localStorage.getItem('userData');
  const userData = storedData ? JSON.parse(storedData) : null;
  const UserAccountId = userData?.user?.userAccountId;

  // States to manage loading, error messages, and user profile data
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [profilePhoto, setProfilePhoto] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [nin, setNin] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const [officeAddress, setOfficeAdd] = useState('');
  const [validIdDocument, setValidDoc] = useState('');

  // Function to handle the change of valid documents
  const handleValidDocChange = (e) => {
    const selectedFiles = e.target.files;
    setValidDoc(selectedFiles);
  };

  // Function to handle profile update
  const handleUpdate = () => {
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const profileToUpdate = {
      Description: description,
      Gender: description,
      PhoneNumber: phoneNumber,
      OfficeAddress: officeAddress,
      ProfileImage: profilePhoto,
      ValidDocument: validIdDocument,
      Location: location,
      // FacebookUrl: ,
      // isPublished: false
    };

    // Make a PUT request to update the user profile
    axios
      .put(`http://162.255.87.139:5034/api/v1/User/createorupdateprofile?id=${UserAccountId}`, profileToUpdate)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        setIsLoading(false);
        setSuccessMessage('Profile updated successfully.');
        console.log(profileToUpdate);
      })
      .catch((error) => {
        // Handle errors if any
        console.error(error);
        setIsLoading(false);
        setErrorMessage('Failed to update profile.');
      });
  };

  // Load user profile data on component mount
  useEffect(() => {
    if (storedData) {
      // Check if each field is not null before setting the state
      if (userData.user.profilePhoto) {
        setProfilePhoto(userData.user.profilePhoto);
      }
      if (userData.user.firstname) {
        setFirstName(userData.user.firstname);
      }
      if (userData.user.lastname) {
        setLastName(userData.user.lastname);
      }
      if (userData.user.description) {
        setDescription(userData.user.description);
      }
      if (userData.user.nin) {
        setNin(userData.user.nin);
      }
      if (userData.user.phoneNumber) {
        setPhoneNumber(userData.user.phoneNumber);
      }
      if (userData.user.email) {
        setEmail(userData.user.email);
      }
      if (userData.user.location) {
        setLocation(userData.user.location);
      }
      if (userData.user.validIdDocument) {
        setValidDoc(userData.user.validIdDocument);
      }
      if (userData.user.officeAddress) {
        setOfficeAdd(userData.user.officeAddress);
      }
    }
  }, []);

  
  return (
    <div className='ProfileUpdate'>
        <div className="ProfileUpdateContainer">
        <div className="upload">
                <input
                  style={{ display: 'none' }}
                  type="file"
                  id="file"
                  accept="image/*"  // Allow multiple file selection
                />
                <label htmlFor="file" className="file">
                {profilePhoto ? (
              <img src={profilePhoto} alt="Profile" />
            ) : (
              <img src={Add} alt="Add Profile" />
            )}
                </label>
          
              </div>
       

             <div className="updateContainer">
             <form >
               <div className="name">
                <div className="fName">
                <span>First Name</span>
                <div className="inputbox">
                <input type="text"  value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                    <BiPencil className='editIcon'/>
                </div>
                </div>
                <div className="lName">
                <span>Last Name</span>
                <div className="inputbox">
                <input type="text"  value={lastname} onChange={(e) => setLastName(e.target.value)} />
                    <BiPencil className='editIcon'/>
                </div>
                </div>
               </div>
               
                <div className="bio">
                <span>Bio</span>
                <div className="biobox">
                <textarea id="bio" name="bio" rows="30" cols="80" className='input' value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>  
                    <BiPencil className='editIcon'/>
                </div>
                </div>

                <div className="name">

                <div className="nin">
                <span>NIN</span>
                <div className="inputbox">
                <input type="number" value={nin} onChange={(e) => setNin(e.target.value)} />
                    <AiOutlineEyeInvisible className='editIcon'/>
                </div>
                </div>

                <div className="pNumber">
                <span>Phone Number</span>
                <div className="inputbox">
                <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <BiPencil className='editIcon'/>
                    </div>
                </div>
               </div>
               
                
                
               
               <div className="name">
               <div className="email">
                <span>Email</span>
                <div className="inputbox">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <BiPencil className='editIcon'/>
                </div>
                </div>

                <div className="location">
                <span>Location</span>
                <div className="inputbox">
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                    <BiPencil className='editIcon'/>
                    </div>
                </div>
                </div>

                <div className="name">
               <div className="email">
                <span>Valid Document </span>
                <div className="inputbox">

                <input
                  type="file"
                  id="file"
                  accept="multiple"  // Allow multiple file selection
                  onChange={handleValidDocChange}
                />
                {/* <input type="email"  /> */}
                    <BiPencil className='editIcon'/>
                </div>
                </div>

                <div className="location">
                <span>Office Address</span>
                <div className="inputbox">
                <input type="text" value={officeAddress} onChange={(e) => setOfficeAdd(e.target.value)} />
                    <BiPencil className='editIcon'/>
                    </div>
                </div>
                </div>
            

                    <button  onClick={handleUpdate} disabled={isLoading}>request update </button>
                    
            </form>
             </div>
        </div>
        </div>
  )
}

export default ProfileUpdate