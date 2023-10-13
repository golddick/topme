import './profileupdate.scss';
import Calender from '../calender/Calender';
import { RiAddBoxLine } from 'react-icons/ri';
import {CiCalendar} from 'react-icons/ci'
import { BiPencil, BiSolidChevronDown, BiCamera } from 'react-icons/bi';
import Add from '../../assets/addimage.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileUpdate() {

 // State variables for country and states
 const [countries, setCountries] = useState([]);
 const [selectedCountry, setSelectedCountry] = useState('');
 const [selectedState, setSelectedState] = useState('');
 const [states, setStates] = useState([]); 
 const [cities, setCities] = useState([])
 const [selectedCity, setSelectedCity] = useState('')
 const [loadingStates, setLoadingStates] = useState(false);
 const [date, setDate] = useState()


   // Function to handle country selection
   const handleCountrySelect = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState(''); // Reset the selected state when the country is changed
  };

  // Function to handle state selection
  const handleStateSelect = (event) => {
    setSelectedState(event.target.value);
  };
  // Function to handle cities selection
  const handleCitySelect = (event) => {
    setSelectedCity(event.target.value);
  };

  // Function to handle Date selection
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Fetch the list of countries and states on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      const countryList = {
        method: 'GET',
        url: 'https://city-and-state-search-api.p.rapidapi.com/countries',
        headers: {
          'X-RapidAPI-Key': 'ea74715af5msh6e8e1954e1a9933p17834bjsn2b1a7edd5cd8',
          'X-RapidAPI-Host': 'city-and-state-search-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(countryList);
        const countryData = response.data;
        // Extract and sort the list of countries
        const sortedCountries = countryData.map((country) => country.name).sort();
        setCountries(sortedCountries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  // Fetch state list from selected country
  useEffect(() => {
    if (selectedCountry) {
      setLoadingStates(true);
  
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
  
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            // Parse the response JSON
            const response = JSON.parse(this.responseText);
            // Assuming the response is an array of state names
            setStates(response);
  
            setLoadingStates(false);
          } else {
            // Handle errors here, e.g., set an error state
            setLoadingStates(false);
            console.error("Failed to fetch states.");
          }
        }
      });
  
      xhr.open('GET', `https://city-and-state-search-api.p.rapidapi.com/states?country_name=${selectedCountry}`);
      xhr.setRequestHeader('X-RapidAPI-Key', 'ea74715af5msh6e8e1954e1a9933p17834bjsn2b1a7edd5cd8');
      xhr.setRequestHeader('X-RapidAPI-Host', 'city-and-state-search-api.p.rapidapi.com');
  
      xhr.send();
    }
  }, [selectedCountry]);

  // Fetch city list from selected state
  useEffect(() => {
    if (selectedState) {
      setIsLoading(true);
  
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
  
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            // Parse the response JSON
            const response = JSON.parse(this.responseText);
            // Assuming the response is an array of city names
            const cityNames = response.map((city) => city.name);
            // Set the city names to the state
            setCities(cityNames);
  
            setIsLoading(false);
            console.log(cityNames)
          } else {
            // Handle errors here, e.g., set an error state
            setLoadingCities(false);
            console.error("Failed to fetch cities.");
          }
        }
      });
  
      xhr.open('GET', `https://city-and-state-search-api.p.rapidapi.com/cities/search?q=${selectedState}&country_name=${selectedCountry}`);
      xhr.setRequestHeader('X-RapidAPI-Key', 'ea74715af5msh6e8e1954e1a9933p17834bjsn2b1a7edd5cd8');
      xhr.setRequestHeader('X-RapidAPI-Host', 'city-and-state-search-api.p.rapidapi.com');
  
      xhr.send();
    }
  }, [selectedState]);



  // Retrieve user data from local storage
  const storedData = localStorage.getItem('userData');
  const userData = storedData ? JSON.parse(storedData) : null;
  const UserAccountId = userData?.user?.userAccountId;

  // States to manage loading, error messages, and user profile data
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [profilePhoto, setProfilePhoto] = useState(null);
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
  const handleValidDocChange = (event) => {
    const file = event.target.files[0];
    setValidDoc(file);
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
                  accept="image/*" 
                  onChange={(e) => setProfilePhoto(e.target.files[0])}
                />
                <label htmlFor="file" className="addprofile">
                {profilePhoto ? (
              <img src={URL.createObjectURL(profilePhoto)} alt="Profile" />
            ) : (
              <div className="addimage">
          <BiCamera className='uploadIcon'/>
          </div>
            )}
          <div className="addimage">
          <BiCamera className='uploadIcon'/>
          </div> 
                </label>
          
              </div>
       

             <div className="updateContainer">
             <form >
               <div className="formTop">
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

               <div className="email">
                <span>Email</span>
                <div className="inputbox">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <BiPencil className='editIcon'/>
                </div>
                </div>
               </div>
               
               <div className="bioData">

               <div className="name">
                <div className="fName">
                <span>Gender</span>
                <div className="inputbox">
                <input type="text"  value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                    <BiSolidChevronDown className='editIcon'/>
                </div>
                </div>
                <div className="lName">
                <span>Phone Number</span>
                <div className="inputbox">
                <input type="text"  value={lastname} onChange={(e) => setLastName(e.target.value)} />
                    <BiPencil className='editIcon'/>
                </div>
                </div>
             
               </div>


               <div className="name">
                {/* <div className="fName">
                <span>country</span>
                <div className="inputbox">
                <input type="text"  value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
           
                    <BiSolidChevronDown className='editIcon'/>
                </div>
                </div> */}
                <div className="fName">
            <span>Country</span>
            <div className="inputbox" >
              <select
                 value={selectedCountry}
                 onChange={handleCountrySelect}
                style={{width:'100%'}}

              >
                <option value="" >Select a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country} >
                    {country}
                  </option>
                ))}
              </select>
              {/* <BiSolidChevronDown className="editIcon" /> */}
            </div>
          </div>
                {/* <div className="lName">
                <span>states</span>
                <div className="inputbox">
                <input type="text"  value={lastname} onChange={(e) => setLastName(e.target.value)} />
                    <BiSolidChevronDown className='editIcon'/>
                </div>
                </div> */}


        <div className="lName">
            <span>State</span>
            <div className="inputbox">
            <select
              value={selectedState}
              onChange={handleStateSelect}
              style={{ width: '100%' }}
            >
              <option value="">Select a state</option>
              {loadingStates ? (
                <option disabled>Loading states...</option>
              ) : (
                states.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name}
                  </option>
                ))
              )}
            </select>
              {/* <BiSolidChevronDown className="editIcon green" />  */}
            </div>
          </div>

               </div>
               <div className="name">
                <div className="fName">
                <span>cities</span>
                <div className="inputbox">
                <select
              value={selectedCity}
              onChange={handleCitySelect}
              style={{ width: '100%' }}
            >
              <option value="">Select a city</option>
              {loadingStates ? (
                <option disabled>Loading states...</option>
              ) : (
                cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))
              )}
            </select>
                </div>
                </div>
                <div className="lName">
                <span>date of birth</span>
                <div className="dateBox">
                <input type="date"  value={date} onChange={handleDateChange}  
            />
                    {/* <CiCalendar className='editIcon'/> */}
                   
                </div>
               
                </div>
               </div>
               <div className="address">
                <span>office address</span>
                <div className="inputbox">
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <BiPencil className='editIcon'/>
                </div>
                </div>
               
               <div className="bio">
                <span>Bio</span>
                <div className="biobox">
                <textarea id="bio" name="bio" rows="30" cols="80" className='input' value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>  
                    <BiPencil className='editIcon'/>
                </div>
                </div>

               </div>
              
              <div className="formButtom">

           <div className="socialLink">
                <div className="inboxName">
                <span>instagram link</span>
                <div className="inputbox">
                <input type="text" value={nin} onChange={(e) => setNin(e.target.value)} />
                    <BiPencil className='editIcon'/>
                </div>
                </div>

                <div className="inboxName">
                <span>youtube link</span>
                <div className="inputbox">
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <BiPencil className='editIcon'/>
                    </div>
                </div>

                <div className="inboxName">
                <span>twitter link</span>
                <div className="inputbox">
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <BiPencil className='editIcon'/>
                    </div>
                </div>

           </div>
           <div className="doc-upload">
           <div className="valid-doc">
                <span>Valid Document</span>
                <div className="inputbox">
                <input type="text"  value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                    <BiSolidChevronDown className='editIcon'/>
                </div>
                </div>

           <div className="validDoc-upload">
                <span>Valid Document upload</span>
                <div className="inputbox">

                <input
                style={{display:'none'}}
                  type="file"
                  id="file"
                  accept="multiple"  // Allow multiple file selection
                  onChange={handleValidDocChange}
                />
                 <label htmlFor="file" className="file">
                  {validIdDocument? validIdDocument : 'Upload Valid Doc'}
                  <RiAddBoxLine className='editIcon'/>
                 </label>
                
                </div>
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