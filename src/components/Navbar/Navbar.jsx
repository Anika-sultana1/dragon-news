import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthContext';

const Navbar = () => {

    const {user, logOutUser} = use(AuthContext)

    const handleLogOut= ()=>{
       
        logOutUser()
        .then(result => {
            console.log(result.user)
            
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='flex justify-end items-center gap-96'>
           <div>{user && user.email}</div>
           <div className='flex gap-5 text-accent'>
           <NavLink to="/"> <p>Home</p></NavLink>
           <NavLink to="/about"> <p>About</p></NavLink>
           <NavLink to="/career"> <p>Career</p></NavLink>
           </div>
           <div className='flex justify-end gap-2'>
            <img className='w-[40px] h-[40px] rounded-full' src={`${user ? user.photoURL  : userIcon }`} alt="" />
            {
                user ? (  <Link> <button 
                    onClick={handleLogOut}
                    className="login btn btn-primary p-3 px-8">Sign Out</button></Link>) : (  <Link to='/auth/login'> <button className="login btn btn-primary p-3 px-8">Login</button></Link>)
            }
         
           </div>
          
        </div>
    );
};

export default Navbar;