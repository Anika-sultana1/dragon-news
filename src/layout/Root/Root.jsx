import React from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import LatestNews from "../../components/latestNews.jsx/LatestNews";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import LeftAside from "../Home/LeftAside";
import RightAside from "../Home/RightAside";
import Loading from "../../Provider/loading";




const Root = () => {

  const data = useLoaderData();
  const {state} =useNavigation();

  return (
    <div>
     <header><Header></Header>
     {import.meta.env.VITE_name}
     </header>
    <section className="w-11/12 mx-auto mb-3">
        <LatestNews></LatestNews>
    </section>
    <nav className="w-11/12 mx-auto my-5">
     <Navbar></Navbar>
    </nav>
      <main className="w-11/12 mx-auto my-5 grid grid-cols-12">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside data={data}></LeftAside>
        </aside>
        
        <section className="main col-span-6">
          {
            state === 'loading' ? <Loading></Loading> :  <Outlet></Outlet>
          }
          
         
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
        
      </main>
    </div>
  );
};

export default Root;
