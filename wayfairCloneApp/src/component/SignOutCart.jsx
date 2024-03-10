import { Link } from "react-router-dom"
import "./SignOutCart.css"
import SignInEmptyCart from "./SignInEmptyCart"
import SignOutUserCart from "./SingOutUserCart"
import { useContext } from "react"
import { Context } from "../Context"
import CartItemCard from "./CartItemCard"
function SignOutCart({visible,setCartPageVisible,right}){
    const {isLoggedIn,setIsLoggedIn} = useContext(Context)
    const {cartLength,setCartLength} = useContext(Context)
    return(
        <div className="signOutCart" style={{right:right,transition:"all linear .5s"}} value={visible}>
            <div className="signOutCartDiv1">
                <p>In Your Cart</p>
                <i className="fa-solid fa-x" onClick={()=>setCartPageVisible(false)}></i>
            </div>
            {isLoggedIn ? <div className="signOutCartDiv2">
                {cartLength === 0 ? <><p>Oh-no! Looks like your cart is empty.</p>
                <p>Here are some options to get you started:</p>
                <SignInEmptyCart/></> : <div style={{display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems:"center",paddingTop:20,paddingBottom:20,position:"absolute",top:300,left:150,border:"1px solid lightgray",borderRadius:5}}>
                <p style={{fontSize:25}}>view all product</p>
                <Link to="/cart"><button style={{fontSize:13,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,borderRadius:5,backgroundColor:"rgb(116, 28, 157)",color:"white",border:"none",cursor:"pointer",}}>View</button></Link>
            </div>}
            </div> : 
            <div className="signOutCartDiv2">
                <p>Oh-no! Looks like your cart is empty.</p>
                <p>Here are some options to get you started:</p>
                <SignOutUserCart/>
            </div>
            }
            
            
            
            
        </div>
    )
}

export default SignOutCart