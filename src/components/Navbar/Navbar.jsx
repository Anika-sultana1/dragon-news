import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-end items-center gap-96'>
           <div className='flex gap-5 text-accent'>
           <NavLink to="/"> <p>Home</p></NavLink>
           <NavLink to="/about"> <p>About</p></NavLink>
           <NavLink to="/career"> <p>Career</p></NavLink>
           </div>
           <div className='flex justify-end gap-2'>
            <img className='w-[40px] h-[40px]' src={user} alt="" />
            <button className="login btn btn-primary p-3 px-8">Login</button>
           </div>
          
        </div>
    );
};

export default Navbar;