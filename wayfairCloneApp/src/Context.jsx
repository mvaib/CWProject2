import { createContext, useRef, useState } from "react";
import SignIn from "./component/SignIn";
import Nav from "./component/Nav";

export const Context = createContext()

export function ContextProvider({children}){
    const [signInBtn,setSignInBtn] = useState(false)
    const [createAccount,setCreateAccount] = useState(false)
    const [authenticationData,setAuthenticationData] = useState([])
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    let [cart,setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null)
    const [cartLength,setCartLength] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0)
    let email = useRef("")
    let password = useRef("")
    let name = useRef("")

    authenticationData.map((item)=>{
        email = item.email
        password = item.password
        name = item.username
    
    })
    
    return(
        <Context.Provider value={{signInBtn,setSignInBtn,createAccount,setCreateAccount,authenticationData,setAuthenticationData,isLoggedIn,setIsLoggedIn,email,password,name,loading,setLoading,error,setError,cart,setCart,cartLength,setCartLength,}}>
            {children}
        </Context.Provider>
    )
}