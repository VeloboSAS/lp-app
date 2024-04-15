import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from "../../images/linkin-park.jpg"



const Logo = () => (<div className='logo'>
        <NavLink to="/">
            <img src={logo} alt="Linkin Park"/>
        </NavLink>
    </div>  );

 
export default Logo;