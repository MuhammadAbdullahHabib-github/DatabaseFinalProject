import React from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css';

import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Sidebar = ({setAuthenticate}) => {

    const logout = (e) => {
        e.preventDefault();
        setAuthenticate(false);
        localStorage.removeItem("token");
    }
    return (
        
            <div className="sidebar">
                <div className="sidebar__title">
                    <div className="sidebar__logodetails">
                        <img src="/images/ptLogo_white.png" alt="white_pt_logo" />
                        <p>Project Topi</p>
                    </div>
                </div>

                <div className="sidebar__menu">
                    <div className="sidebar_top">
                        <div className="sidebar__link ">
                            <AssignmentIcon className="sidebar__link__icon" style={{fontSize:"200%", color: "#fff" ,backgroundColor:"#000"}} />
                            <Link to="/dashboard/form" className="menu__text">Form</Link>
                        </div>
                        <div className="sidebar__link ">
                            <PersonOutlineIcon style={{ fontSize:"200%",color: "#fff" ,backgroundColor:"#000"}} className="sidebar__link__icon"/>
                            <Link to="/dashboard/profile" className="menu__text">Update Profile</Link>
                        </div>
                    </div>
                    <div className="sidebar__bottom">
                        <div className="sidebar__link ">
                            <ExitToAppIcon style={{fontSize:"200%", color: "#fff",backgroundColor:"#000" }} className="sidebar__link__icon"/>
                            <button onClick={(e) => logout(e)} className="menu__text logout__button">Logout</button>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Sidebar
