import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';
import bg from '../../assets/bg.png'

const RightAside = () => {
    return (
        <div className='space-y-8'>
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        <QZone></QZone>
        <img className='w-full' src={bg} alt="" />
        </div>
    );
};

export default RightAside;