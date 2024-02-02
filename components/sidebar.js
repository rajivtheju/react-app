import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaCommentAlt
}from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { RiFeedbackFill } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/Payments",
            name:"Payments",
            icon:<FaRegMoneyBillAlt />
        },
    
        {
            path:"/Leadboard",
            name:"Leader board",
            icon:<FaCommentAlt/>
        }
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logoq2">Dashboard</h1>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;