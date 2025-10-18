import React from "react";
import { Outlet, useLoaderData } from "react-router";
import LatestNews from "../../components/latestNews.jsx/LatestNews";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import LeftAside from "../Home/LeftAside";
import RightAside from "../Home/RightAside";




const Root = () => {

  const data = useLoaderData();

  return (
    <div>
     <header><Header></Header></header>
    <section className="w-11/12 mx-auto mb-3">
        <LatestNews></LatestNews>
    </section>
    <nav className="w-11/12 mx-auto my-5">
     <Navbar></Navbar>
    </nav>
      <main className="w-11/12 mx-auto my-5 grid grid-cols-12">
        <aside className="col-span-3">
          <LeftAside data={data}></LeftAside>
        </aside>
        
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
        
      </main>
    </div>
  );
};

export default Root;
