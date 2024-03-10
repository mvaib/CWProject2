import { Link } from "react-router-dom"
import App from "../App"
import { useContext, useState } from "react"
import { Context} from "../Context"
function Account({visible,setAccountVisible}){
    const {signInBtn,setSignInBtn} = useContext(Context)
    const {createAccount,setCreateAccount} = useContext(Context)
    const {isLoggedIn,setIsLoggedIn} = useContext(Context)
    return(
        <div className="accountDropDown" value={visible} onMouseEnter={()=>setAccountVisible(true)} onMouseLeave={()=>setAccountVisible(false)}>
            <div className="accountDropDownDiv1">
                {isLoggedIn ? <Link to="/"><button onClick={()=>setIsLoggedIn(()=>false)} style={{fontSize:13}}>Sign Out</button></Link> : <Link to="/"><button onClick={()=>setSignInBtn(()=>true)}>Sign In</button></Link>}
                <Link to="/" onClick={()=>setCreateAccount(()=>true)}>Create an Account</Link>
            </div>
            <div className="accountDropDownDiv2">
                <Link><i className="fa-solid fa-box"></i>
                <p>My order</p></Link>
            </div>
        </div>
    )
}

export default Account