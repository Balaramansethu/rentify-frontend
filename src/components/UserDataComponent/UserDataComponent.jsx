import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../LoginComponent/LoginComponent.css'
import '../UserDataComponent/UserDataComponent.css'
const UserDataComponent = () => {
  const [userData, setUserData] = useState('');

  const handlebuyer = () =>{
    window.location.href = '/buyer';
  }
  const handleseller = ()=>{
    window.location.href = '/seller';
  }
  useEffect(() => {
    axios.post(`http://localhost:3500/api/v1/userdata`,{
      token: window.localStorage.getItem('token'),
    })
    .then((response) => {
      console.log(response.data)
        setUserData(response.data)
    })
    .catch((error) => {
      alert(`Status : ${error.response.status} - ${error.response.data.message}`)
  })
  }, []);

  return (
    <React.Fragment>
      
      <div className='container mb-3'>
      <h1>welcome, {userData.firstName} you can continue to site</h1>
        <p>First Name: </p>
        <h4> {userData.firstName}</h4>
        <p>Last Name: </p>
        <h4>{userData.lastName}</h4>
        <p>Email: </p>
        <h4>{userData.email}</h4>
        <div className='redirect-btn-container'>
        <button className='buyer-btn' onClick={handlebuyer}>Buy property</button>
        <button className='seller-btn' onClick={handleseller}>Sell property</button>
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default UserDataComponent;
