import React, {useState} from 'react';
import SideNav from './sidebar';
import {FaBars} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import logo from "../images/logo.png";
import {AiOutlineLogout} from 'react-icons/ai';
import {GiRamProfile} from 'react-icons/gi';
import {FiHelpCircle} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Header(props) {
    const [wid, setWid] = useState('0%');
    const mediaQuery = window.matchMedia ('(max-width:600px)');
    
    const openSidenav = ( ) => {
        setWid('30%');
        if(mediaQuery.matches){
          setWid('100%');
        }
        
      }

     const closeSidenav = ( ) => {
        setWid('0%')
     }
      

     const Logout = () =>{
       localStorage.clear();
       window.location.pathname = '/';
     };


    return(
        <div className="header">
        <div className="container">
          <div className="top">
             <div className="symbol">
             <Link to = '/main'>
             <img className="logo"  src={logo} alt="" />
             </Link>
              </div>

                <div className="data">
              <h1 className="title">React Home Page</h1>
              <p className="para">Every moment is a fresh beginning....</p> 
              </div>

              <Dropdown>
  <Dropdown.Toggle variant="info" id="dropdown-basic">
    <CgProfile className="profile" />
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Profile <GiRamProfile style={{marginLeft:'15px'}} /></Dropdown.Item>
    <Dropdown.Item href="#/action-2">Help <FiHelpCircle  style={{marginLeft:'15px'}} /></Dropdown.Item>
    <Dropdown.Item onClick={Logout} >
      
      Log out <AiOutlineLogout style={{marginLeft:'15px'}} /> 
      </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


          </div>

           <button className="open" onClick={openSidenav}><FaBars/></button>
           </div>
            <SideNav  width={wid} closeNav={closeSidenav} />
            
        </div>
    )

}