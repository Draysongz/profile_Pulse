

import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';



const Profile = ()=> {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [birthday, setBirthday] = useState("")
    const [image,setImage] = useState("")
    const[number, setNumber]=useState("")

    useEffect(() => {
        getData();
     // eslint-disable-next-line
     }, []);
    var randomProfile = require('random-profile-generator');
    const getData=()=>{
   let userProfile=  randomProfile.profile()
  
        let img = faker.internet.avatar();
        let fName = userProfile.firstName
        let lName = userProfile.lastName
        let mail =userProfile.email
        let birthday = userProfile.birthday
        let number= userProfile.phone
  
  
        setFirstName(fName)
        setLastName(lName)
        setImage(img)
        setBirthday(birthday)
        setEmail(mail)
        setNumber(number)
        console.log(userProfile);
    }


  const handle = ({isActive,clicked}) => {
    getData()
  }


  return (
    <div className="App">

      <div className="card-box">
      <div className='img'><img src={image} alt="ProfileImage"/></div>
      <div className='details'>
      <h2> First name :  {firstName}</h2>
      <h2> Last Name: {lastName}</h2>
      <h2 className='email'> Email: {email}</h2>
      <h2 className='country'> Date of Birth: {birthday}</h2>
      <h2 className='number'> Phone Number: {number}</h2>
      <button className='btn btn-outline-primary createUser' onClick={handle}>Get another User</button>
      </div>
      </div>
     
     
     
    </div>

  )
}

export default Profile
