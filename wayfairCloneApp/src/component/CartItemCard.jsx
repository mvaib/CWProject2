import { useContext, useEffect, useState } from "react"
import { Context } from "../Context"
import "./CartItemCard.css"

function CartItemCard(){

    let {cart,setCart} = useContext(Context)
    const {cartLength,setCartLength} = useContext(Context)
    
    return(
        <div className="CartItem">
            <p>Welcome to Cart</p>
            <div className="CartItemCard">
                {cart.map((item,i)=>(
                    <div key={i} className="CartItemCont">
                        <div className="CartItemImg">
                            <img src={item.img} alt="" />
                        </div>
                        <p className="CartItemTitle">{item.title}</p>
                        <p style={{color:"darkred"}}>{item.price}</p>
                        <button>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CartItemCard