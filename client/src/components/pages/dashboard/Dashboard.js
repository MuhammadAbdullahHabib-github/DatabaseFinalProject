import React from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';
import Profile from './../Profile/Profile'


const Dashboard = ({setAuth ,  breadCrumb}) => {

    return (
        <div className="container dashboard">
                    <Navbar  breadCrumb = {breadCrumb}/>
                    <Sidebar setAuthenticate={setAuth}/>
                    <Profile/>
                    <Footer/>
        </div>
    )
}

export default Dashboard;
