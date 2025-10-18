import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
       <footer>
        <div  className="flex flex-wrap justify-between  items-center bg-gray-900 text-white h-30">
        <div className="m-5">
            <h2> © 2025 Day2Day Mart</h2>
            
        </div>
        <nav>
            <ul className="flex flex-wrap m-3">
                <NavLink to="/About">
                <li className="m-2">About</li>
                </NavLink>
                <NavLink to="/Contact">
                <li className="m-2">Contacts</li>
                </NavLink>
                
            </ul>
        </nav>

        </div>
       </footer>
    )
}

export default Footer;