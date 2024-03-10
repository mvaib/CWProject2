import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"
import Loading from "./Loading"
import Error from "./Error"



function CreateAccount(){
    const {createAccount,setCreateAccount} = useContext(Context)
    const {authenticationData,setAuthenticationData} = useContext(Context)
    let {name,email,password,confirmPassword} = useContext(Context)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [createAccLoading,setCreateAccountLoading] = useState(false)
    const [createAccError,setCreateAccountError] = useState(null)
   
    function handleContinue(){
        setCreateAccount(()=>false)
        alert("Account created successfully")
    }
    function handleSubmit(){
    }
        return(
            <>
                <div className="signIn">
                    <div className="logoCont">
                        <Link to="/" onClick={()=>setCreateAccount(()=>false)}>
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
                        <form className="form" onSubmit={handleSubmit}>
                            <p>Enter your email address and create a password to create an account</p>
                            <input type="text"  id="username" placeholder="Name"/>
                            <input type="email" id="email" placeholder="Email address"/>
                            <input type="password"  id="password" placeholder="Password"/>
                            <input type="password"  id="confirmPassword" placeholder="Confirm Password"/>
                            <Link to="/"><button type="submit" onClick={handleContinue}>Continue</button></Link>
                        </form>
                        <Link to="/"><button className="backbtn" onClick={() => {
                                setCreateAccount(()=>false)
                            }}>Back</button></Link>
                            {createAccLoading ? <Loading/> : createAccError ? <div>Something Went Wrong</div> : null}
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

export default CreateAccount