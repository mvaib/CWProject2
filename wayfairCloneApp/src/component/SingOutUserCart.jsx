import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"
function SignOutUserCart(){
    const {signInBtn,setSignInBtn} = useContext(Context)
    return(
        <>
            <div>
                <i className="fa-solid fa-user"></i>
                <Link to="/" onClick={()=>{setSignInBtn(()=>true)}}>Sign In</Link>
                <p>to view your saved items</p>
            </div>
        </>
    )
}
export default SignOutUserCart