import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeComponent from '../HomeComponent/HomeComponent'
import SellerComponent from '../SellerComponent/SellerComponent'
import '../NavigationComponent/NavigationComponent.css'
import '../LoginComponent/LoginComponent'
import LoginComponent from '../LoginComponent/LoginComponent'
import '../SignupComponent/SignupComponent'
import SignupComponent from '../SignupComponent/SignupComponent'
import '../UserDataComponent/UserDataComponent'
import UserDataComponent from '../UserDataComponent/UserDataComponent'
import BuyerComponent from '../BuyerComponent/BuyerComponent'
const NavigationComponent = () => {
  return (

    <Router>
        
        <nav>
        <ul className='navigation-bar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/seller'>For property owners</Link></li>
            <li><Link to='/buyer'>For buyers</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
        </ul>
        </nav>

    <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/seller' element={<SellerComponent/>}/>
        <Route path='/buyer' element={<BuyerComponent/>}/>
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/signup' element={<SignupComponent/>}/>
        <Route path='/userdata' element={<UserDataComponent/>}/>
    </Routes>   

    </Router>
    
  )
}

export default NavigationComponent