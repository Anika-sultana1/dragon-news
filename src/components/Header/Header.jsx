import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-[50px]'>
           <img className='w-[400px] h-[60px]' src={logo} alt="" />
           <p className='my-3 text-accent'><small>Journalism Without Fear or Favour</small></p>
           <p className='text-accent font-semibold'>{format(new Date(),"EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;