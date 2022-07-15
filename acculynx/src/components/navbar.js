import React from 'react';
import NavbarLeft from '../containers/navbar-left';
import NavbarRight from '../containers/navbar-right';

export default function Navbar(){
    return(
        <div className='flex navbar justify-between '>
                <NavbarLeft />
                <NavbarRight />
        </div>
    )
}