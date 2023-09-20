import React, { useState } from 'react';
import './Login.css';
import   ambu  from '../Assets/login_assets/AMBU_logo.png';
import img2 from '../Assets/login_assets/img2.jpeg';
import search from '../Assets/login_assets/search.png';
import fb from '../Assets/login_assets/facebook.png';


export const Login = () => {
 

  return (
    
    <div className='conatiner'>
    
        <div className="header">
            <img src={ambu}></img>
        </div>

        <div className="text">
            <div className='text-1'>Welcome to
            <h2> AMBUvians</h2>
            </div>

            <div className="text-2">Let's hope you stay on top of your health</div>

        </div>

        <div className="content">

        <div className="img">
            <img src={img2}></img> 
        </div>

        <div className="inputs">

         <div className='input-1'>
          <div className="txt-1">Email Adress/Phone number</div>
          <input type='email'></input>
         </div>

         <div className="input-2">
         <div className="txt-2">Password</div>
          <input type='password'></input>
         </div>

        </div>
        <div className="check">
          <input type='checkbox' id='checkbox'></input>
          <label for="checkbox">Keep me logged in</label>
        </div>
        <div className="login">
          <button type='submit'> Log In</button>
         </div>
        <div className="forget">
          <a href=" ">Forget password?</a>
        </div>
        </div> 

    <div className="footer">
      <div className="or">--OR--</div>
      <div className="icons">
       <a href=""><img src={search}  className="search"alt="" /></a>
       <a href=""><img src= {fb}alt=""  className='fb'/></a>
      </div>

      <div className="acc">
         Don't have an account?
         <a href="#" >Sign Up here!</a>
      </div>
    </div>
    </div>
  )
}
