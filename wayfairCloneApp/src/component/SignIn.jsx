import { useContext, useEffect, useRef, useState } from 'react'
import './SignIn.css'
import { Context, ContextProvider } from '../Context'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Error from './Error'
function SignIn({item}){
    const {signInBtn,setSignInBtn} = useContext(Context)
    const {authenticationData,setAuthenticationData} = useContext(Context)
    const {isLoggedIn,setIsLoggedIn} = useContext(Context)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [signInLoading,setSignInLoading] = useState(false)
    let [Email,setEmail] = useState("")
    let [Password,setPassword] = useState("")
    let {email} = useContext(Context)
    let {password} = useContext(Context)

    
   
    function handleClick(){
        alert("Login Successful")
        setSignInBtn(()=>false)
        setIsLoggedIn(()=>true)
        
    }
    
        return(
            <>
                <div className="signIn">
                    <div className="logoCont">
                        <Link to="/" onClick={()=>setSignInBtn(()=>false)}>
                            <div className="Logo">
                                wayfair
                            </div>
                        </Link>
                        <div className="secureLoginText">
                            <p>Secure Login</p>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                    </div>
                    <div className="signInDiv">
                        <p>Enter your email address to sign in</p>
                        <input type="text" name="email" placeholder="Email address"/>
                        <input type="password" name="pass" placeholder="Password" />
                        <Link to="/"><button onClick={handleClick}>Continue</button></Link>
                        <Link to='/'><button onClick={()=>setSignInBtn(()=>false)}>Back</button></Link>
                        {signInLoading ? <Loading/> : null}
                    </div>
                </div>
                
                <footer className='footer'>
                    <div className='footerDivCont'>
                        <p className='copy'>© 2024, Wayfair</p>
                        <div className='privacy'>
                            <p>Privacy & Terms</p>
                            <p>|</p>
                            <p>Your Privacy Rights and Choices</p>
                        </div>
                    </div>
                </footer>
            </>
        )
    }


export default SignIn