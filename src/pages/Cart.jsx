import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTowishlist, removeFromcart } from "../redux/createslice";
function Cart() {
    const dispatch = useDispatch()
    const products = useSelector((state) => (state.card.cartitem))

    const TotalPrice = products.map(item => item.price).reduce((a, b) => a + b, 0);



    return (
        <div className="" >
            <h1 className="p-2 text-3xl bg-gray-900 text-white">Cart Items</h1>

            <div className="m-5  flex flex-wrap  min-h-screen">
                {products.map((products) =>
                    <div className="w-45 h-50">
                        <div>
                            <img className="h-40 m-auto" src={products.image} alt={products.title} />
                        </div>
                        <div className=" flex-row  ">
                            <p className=" text-xs">{products.title}</p>
                            <p className="font-bold text-sm">price-{products.price}</p>
                            <p>Rating-{products.rating.rate}</p>
                            <div className=" flex-row">
                                <button className="w-25 bg-red-400 border text-xs rounded-sm cursor-pointer" onClick={() => dispatch(addTowishlist(products))} >Add Wishlist</button>
                                <br />
                                <button className="w-25 bg-gray-300 border text-xs rounded-sm cursor-pointer" onClick={() => dispatch(removeFromcart(products))} >Remove</button>
                            </div>
                            {/* <p>{products.product_url}</p> */}
                        </div>

                    </div>)}
                <div>

                </div>

            </div>
            <div className=" flex justify-between border px-10">
                <div className="mx-5  text-black  rounded-l">
                    <p>Total price -{TotalPrice}</p>
                </div>

                <div className=" bg-green-400 rounded-sm w-30 flex justify-center items-center">
                    <p className="font-bold ">Buy now</p>

                </div>

            </div>




        </div>
    )
}
export default Cart;