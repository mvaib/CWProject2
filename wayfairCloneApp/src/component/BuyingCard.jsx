import { useContext, useState } from "react"
import { Context } from "../Context"

function BuyingCard({img,price,title}){
    let {cart,setCart} = useContext(Context)
    if(cart === null){
        cart = []
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    function handleAdd(){
        setCart([...cart,{img,price,title}])
        alert("Item Added To Cart")
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    return(
        <div className="subBuyingCardCont">
            <div className="buyingCardImg">
                <img src={img} alt="" />
            </div>
            <p className="buyingCardTitle">{title}</p>
            <p style={{color:"darkred"}}>{price}</p>
            <button onClick={handleAdd}>Add To Cart</button>
        </div>
    )
}
export default BuyingCard