import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import { useContext } from "react";
import { Context } from "../Context";
import Cart from "./Cart";
import Saving from "./Saving";
import Error from "./Error";
function Middle(){
    
    return(
        <>
            <div className="middle">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/saving" element={<Saving/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </div>
        </>
    )
}
export default Middle