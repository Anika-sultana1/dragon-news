import React, { use } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const AuthLayout = () => {
    const {user} = use(AuthContext)
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-5'>
            <div>{user && user.email}</div>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
             <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;