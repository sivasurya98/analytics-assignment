import React, { useState } from "react";
import "../Styles/Navbar.css";
import data from "../Utils/DashboardData";
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import {TbSettings2} from 'react-icons/tb'
import images from '../assets/navimage.jpg'
import {AiOutlineDown} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="nav-container">
        <button className="menu-button" onClick={()=> handleClick()}>
          {clicked ? <AiOutlineMenu /> : <AiOutlineClose />}
        </button>
      <nav className={clicked ? "active" : ""}>
        <div id="navbar">
            <div>
              <div className="title">
                <h2 className="dashboard">
                  <TbSettings2 size={20}/>
                  Dashboard
                </h2>
                  {data.map(obj =>(
                    <div className="nav-data">
                      <div className="title-content">
                        <div className="nav-icons">{obj.icons}</div>
                        <Link className="nav-link" to={obj.pathname}>{obj.title}</Link>
                      </div>
                      <div className="rightname">{obj.righticon}</div>
                    </div>
                  ))}
              </div>
            </div>
        </div>
          <div className="nav-footer">
            <div className="nav-footer-image"><img src={images} width={30} className="nav-image"  alt="no-images"/></div>
            <div className="nav-footer-content">
              <div className="font-cont">
                <p className="nav-font">Surya</p>
                <p className="nav-font">Developer</p>
              </div>
              <div className="downarrow"><AiOutlineDown /></div>
            </div>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
