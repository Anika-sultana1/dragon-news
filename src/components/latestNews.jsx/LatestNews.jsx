import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {

const [latestNews, setLatestNews] = useState([])


useEffect( ()=>{
fetch('/news.json')
.then(res => res.json())
.then((data) => {
    const filteredNews = data.filter((news) => news.others.is_trending || news.others.is_today_pick)
    setLatestNews(filteredNews)
})
.catch(error => {
    console.log(error)
})
},[])


    return (
        <div className='flex items-center justify-center gap-2 bg-base-200 p-3'>
            <h2 className='text-base-100 bg-secondary px-3 py-2'>Latest</h2>
           <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
           {
            latestNews.map((item)=> (
            <p key={item.category_id } className='font-bold mx-5'>{item.title}</p>
        ))
           }
           </Marquee>
        </div>
    );
};

export default LatestNews;
