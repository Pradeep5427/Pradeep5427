import React from 'react';
import logo from "../images/logo.png";
import {FaTwitter} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default function Footer(){
  

  return(
    <div className="footer">
    <div className="container">
    <div className="contents">

    <div className="content">
    <Link to = '/main'>
    <img className="logo"  src={logo} alt="" />
    </Link>
    <p className="detail">We create the possibilities<br /> for the connected world</p>
    </div>

    <div className="content">
    <h4>Explore</h4>
    <ul>
      <li><a href="#links">Home</a></li>
      <li><a href="#links">About</a></li>
      <li><a href="#links">capabilities</a></li>
      <li><a href="#links">carriers</a></li>
    </ul>
    </div>

    <div className="content">
    
    <div>
      <h4>Visit</h4>
      <address>
      
      Example.com<br/>
      Box 564, Disneyland<br/>
      USA
      </address>
    </div>

    <div style={{marginTop:'15px'}}>
      <h4>New Bussiness</h4>
      <ul>
      <li><a href="mailto:123@gmail.com">123@gmail.com</a></li>
      <li><a href="#">1234567889</a></li>
      
    </ul>
    </div>
    </div>

    <div className="content">
    <h4>Legal</h4>
    <ul>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Privacy</a></li>
    </ul>
    </div>

    <div className="content">
    <h4>Follow</h4>
    <div className="social">
    <ul className="icons">
      <li ><a className="list-1" href="#"><FaTwitter /></a></li>
      <li ><a className="list-1" href="#"><FaFacebookF /></a></li>
      <li ><a className="list-1" href="#"><FaLinkedin /></a></li>
      <li ><a className="list-1" href="#"><FaInstagram /></a></li>
      <li ><a className="list-1" href="#"><FaTelegramPlane/></a></li>
    </ul>
    </div>
    </div>

   
    
    

    </div>
    <p className="copy" style = {{textAlign:'center'}}>&copy;2022 PEACE,All Rights Reserved</p>
    </div>
    </div>
  )
}