import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className='flex items-center justify-center gap-2 bg-base-200 p-3'>
            <h2 className='text-base-100 bg-secondary px-3 py-2'>Latest</h2>
           <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore tenetur rerum rem nobis delectus amet quibusdam, laborum quod vitae facere nisi facilis. Totam odio corrupti delectus est dignissimos! Ipsa?</p>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore tenetur rerum rem nobis delectus amet quibusdam, laborum quod vitae facere nisi facilis. Totam odio corrupti delectus est dignissimos! Ipsa?</p>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore tenetur rerum rem nobis delectus amet quibusdam, laborum quod vitae facere nisi facilis. Totam odio corrupti delectus est dignissimos! Ipsa?</p>
           </Marquee>
        </div>
    );
};

export default LatestNews;