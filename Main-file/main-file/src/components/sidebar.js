import React from 'react';
import {Link} from 'react-router-dom';
import {AiFillCloseCircle} from 'react-icons/ai';
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa';
import {FaBookReader} from 'react-icons/fa';
import {AiOutlineContacts} from 'react-icons/ai';
import {RiCustomerService2Line} from 'react-icons/ri';




function SideNav(props){
return (
  
  <div className="sidenav" style={{ width: props.width, paddingTop: '20px' }}>
<button className="close" onClick={props.closeNav}><AiFillCloseCircle className="fill" /></button>
<ul>
 <li> <Link to ="/main" onClick={props.closeNav}><AiOutlineHome className='side-icon' />Home</Link></li>
 <li>   <Link to="/About" onClick={props.closeNav}> <FaBookReader className='side-icon' />About</Link></li>
 <li>  <Link to="/Client" onClick={props.closeNav}><FaUserTie className='side-icon' /> Client</Link></li>
 <li>  <Link to="/Contact" onClick={props.closeNav}><AiOutlineContacts className='side-icon' /> Contact</Link></li>
 <li>    <Link to="/service" onClick={props.closeNav}><RiCustomerService2Line className='side-icon' /> Service</Link></li>

</ul>

</div>

 );
}
export default SideNav;