import React from 'react';
import classI from '../../assets/class.png'
import playGround from '../../assets/playground.png'
import swimming from '../../assets/swimming.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold mb-5'>Qzone</h1>
            <div className='space-y-5'>
                <img src={swimming} alt="" />
                <img src={classI} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default QZone;