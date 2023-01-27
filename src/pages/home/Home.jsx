import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";


function Home() {
  return <>
        <Topbar />

        <div className="homeContainer">
          <Sidebar />
          <Feed/>
          <Rightbar/>
        </div>
  
  </>
  
  
  



}

export default Home;
