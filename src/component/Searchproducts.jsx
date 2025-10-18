import React from "react";
import { addTocart,addTowishlist } from "../redux/createslice";
import { useDispatch } from "react-redux";
import { useState } from "react";
function Searchproducts({products}) {
   
   const dispatch = useDispatch();
   const [Wishlist,setWishlist] = useState(false)
   function handleclick(){
      setWishlist(!Wishlist)
      dispatch(addTowishlist(products))   
   }
    return(
       <div className="h-90">
         <div className="h-70 w-50 m-2 text-xs"> 
            <img  className="h-50 m-auto" src={products.image} alt={products.title} />
            <p className="text-sm">{products.title}</p>
            <p className="font-bold text-sm">price-{products.price}</p>
            <p>Rating-{products.rating.rate}</p>
            <div className="">
            <button className={`m-1  w-23 border rounded-sm cursor-pointer ${Wishlist ? "bg-red-400":"bg-white text-black"}`} onClick={() => handleclick()} >Add Wishlist</button>
            <br />
            <button className="bg-gray-300 w-23 border rounded-sm cursor-pointer"onClick={()=>dispatch(addTocart(products))} >Add Cart</button>
            </div>
            {/* <p>{products.product_url}</p> */}
         </div>

       </div>
    )
}
export default Searchproducts;