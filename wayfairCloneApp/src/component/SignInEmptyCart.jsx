import { Link } from "react-router-dom"
function SignInEmptyCart(){
    return(
        <>
            <div>
                <i className="fa-solid fa-cart-shopping"></i>
                <p>view your saved items in</p>
                <Link to="/cart" onClick={()=>setCartLink(()=>true)}>Cart</Link>
            </div>
        </>
    )
}

export default SignInEmptyCart