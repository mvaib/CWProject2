import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import Loading from "./Loading"
import Error from "./Error"
import CartCard from "./CartCard"
import "./CartFooter.css"
import "./Cart.css"
import { Context } from "../Context"
import CartItemCard from "./CartItemCard"

let cart = [
        {
          "img": "https://assets.wfcdn.com/im/67032681/resize-h430-w624%5Ecompr-r85/2687/268776900/default_name.jpg",
          "title": "Coastal Living Room Furniture"
        },
        {
          "img": "https://assets.wfcdn.com/im/49799130/resize-h430-w624%5Ecompr-r85/1494/149423124/default_name.jpg",
          "title": "Our Favorite Traditional Furniture"
        },
        {
          "img": "https://assets.wfcdn.com/im/99055661/resize-h430-w624%5Ecompr-r85/1368/136883857/default_name.jpg",
          "title": "Modern Office Furniture"
        }
]

function Cart(){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const {cartLength,setCartLength} = useContext(Context)

        return(
            <> 
                {cartLength > 0 ? <CartItemCard/> :
                <div className="cartDiv">
                    <div className="cartDiv1">
                        <p>Your Shopping Cart Is Empty</p>
                        <p>Save big on our <Link>Featured Sales.</Link></p>
                        <Link to="/saving"><button>Continue Shopping</button></Link>
                    </div>
                    <div className="cartDiv2">
                        <p className="Heading">Your Featured Sales</p>
                        <div className="cartCardCont">
                            {cart.map((item)=>(
                                <CartCard key={item.title} {...item}/>  
                            ))}
                        </div>
                        <Link to="/saving">
                        <div className="shopAllSalesDiv">
                            <p>Shop All Sales</p>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div> 
                        </Link>    
                    </div>
            </div>}
                
            </>
        )
}
export default Cart