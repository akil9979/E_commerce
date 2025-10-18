import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
       <header >
        <div className="flex flex-wrap justify-between  items-center bg-gray-900 text-white h-30">
        <div className="m-5 font-bold">
            <h2>Day2Day Mart</h2>
            
        </div>
        <nav>
            <ul  className="flex flex-wrap m-3 font-bold">
               <NavLink to=""> 
                <li  className="m-2">Home</li>
                </NavLink>
                <NavLink to="/Cart">
                <li className="m-2">Cart</li>
                </NavLink>
                <NavLink to="/Wishlist">
                <li className="m-2">Wishlist 🔍</li>
                </NavLink>
               
            </ul>
        </nav>
        </div>

       </header>
    )
}

export default Header;