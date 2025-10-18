import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTocart, removeFromwishlist } from "../redux/createslice";
function Wishlist() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.card.wishlistitem)
   
    return (
        <div className="" >
            <h1 className="p-2 text-3xl bg-gray-900 text-white">Wishlist Items</h1>

            <div className="m-5  flex flex-wrap  min-h-screen">
                {products.map((products) =>
                    <div className="w-45 h-50">
                        <div>
                            <img className="h-40 m-auto" src={products.image} alt={products.title} />
                        </div>
                        <div className=" flex-row  ">
                            <p className=" text-sm">{products.title}</p>
                            <p className="font-bold text-sm">price-{products.price}</p>
                            <p>Rating-{products.rating.rate}</p>
                            <div className=" flex-row">
                                <button className="w-25 bg-red-400 border text-xs rounded-sm cursor-pointer" onClick={() => dispatch(removeFromwishlist(products))} >Remove</button>
                                <button className="w-25 bg-gray-300 border text-xs rounded-sm cursor-pointer" onClick={() => dispatch(addTocart(products))} >Add cart</button>
                            </div>
                            {/* <p>{products.product_url}</p> */}
                        </div>


                    </div>)}
                
            </div>




        </div>
    )
}
export default Wishlist;
