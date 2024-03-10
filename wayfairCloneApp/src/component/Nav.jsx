import { Link} from "react-router-dom";
import { useContext, useState } from "react";
import Furniture from "./Furniture";
import OutDoor from "./OutDoor";
import Middle from "./Middle";
import Account from "./Account";
import SignOutCart from "./SignOutCart";
import { Context } from "../Context";
import SideBar from "./SideBar";

function Nav({item}){

    const {signInBtn,setSignInBtn} = useContext(Context)

    const {isLoggedIn,setIsLoggedIn} = useContext(Context)
    let {name} = useContext(Context)

    const [sideBarVisible,setSideBarVisible] = useState(false)

    const [isDropDownVisible,setIsDropDownVisible] = useState(false)
    const [ComponentVisible,setComponentVisible] = useState({
        Furniture : false,
        Outdoor : false,
        
    })
    const [cartPageVisible,setCartPageVisible] = useState(false)
    const [AccountVisible,setAccountVisible] = useState(false)
    const {cartCount,setCartCount} = useContext(Context)

    function handleEnter(event){
        let target = event.target.textContent
        if(target === "Furniture"){
            setComponentVisible({
                Furniture : true,
                // OutDoor : false
            })
        }
        if(target === "Outdoor"){
            setComponentVisible({
                Outdoor : true,
                // Furniture : false
            })
        }

    }
    function handleLeave(){
        setComponentVisible(false)
    }
    return(
        <header>
            <div className="headerDiv1">
                <div className="subHeaderDiv1">
                    <Link>Up to 70% OFF & Fast Shipping | Shop Spring Savings</Link>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="subHeaderDiv2">
                    <Link>App</Link> |
                    <Link>Financing</Link> |
                    <Link>Professional</Link> |
                    <p>Free Shipping Over $35*</p>
                    
                </div>
            </div>
            <nav>
                <div id="bars">
                    <i onClick={()=>setSideBarVisible(true)} className="fa-solid fa-bars"></i>
                    {sideBarVisible && <SideBar visible={sideBarVisible} setSideBarVisible={setSideBarVisible}/> }
                </div>
                <Link to="/"><div className="Logo">
                    wayfair</div></Link>
               
               <div className="navsigncont">
                    <div onMouseEnter={()=>setAccountVisible(true)} onMouseLeave={()=>setAccountVisible(false)}>
                        <Link onClick={()=>AccountVisible ? setAccountVisible(false) : setAccountVisible(true)}>
                            <div className="userlogo">
                                <i className="fa-regular fa-user"></i>
                            </div>
                            <p>{isLoggedIn ?"Account": "Sign In"}</p>
                        </Link>
                        {AccountVisible && <Account visible={AccountVisible} setAccountVisible={setAccountVisible}/>}
                        
                    </div>
                    <div onClick={()=>cartPageVisible ? setCartPageVisible(false) : setCartPageVisible(true)}>
                        <Link id="cart1">
                            <div className="cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <p>Cart</p>
                            <p>{cartCount}</p>
                        </Link>
                        <Link id="cart2"  to="/cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                        {cartPageVisible && <SignOutCart right="0px" visible={cartPageVisible} setCartPageVisible={setCartPageVisible}/>}
                        
                    </div>
               </div>
            </nav>
            <div className="headerDiv2Cont">
                    <div className="headerDiv2" onMouseEnter={()=>setIsDropDownVisible(true)} onMouseLeave={()=>setIsDropDownVisible(false)}>
                        <Link onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="Furniture">Furniture</Link>
                        <Link onMouseEnter={handleEnter} onMouseLeave={handleLeave}  className="Outdoor">Outdoor</Link>
                        <Link>Bedding & Bath</Link>
                        <Link>Rugs</Link>
                        <Link>Décor & Pillows</Link>
                        <Link>Lighting</Link>
                        <Link>Organization</Link>
                        <Link>Kitchen"</Link>
                        <Link>Baby & Kids"</Link>
                        <Link>Home Improvement"</Link>
                        <Link>Appliances</Link>
                        <Link>Pet"</Link>
                        <Link>Holiday"</Link>
                        <Link>Shop by Room</Link>
                        <Link style={{color: "darkred"}} >Sale</Link>
                    </div>
                    {isDropDownVisible && <div className="dropdown" value={isDropDownVisible} onMouseEnter={()=>setIsDropDownVisible(true)} onMouseLeave={()=>setIsDropDownVisible(false)}>
                        {ComponentVisible.Furniture && <Furniture />}
                        {ComponentVisible.Outdoor && <OutDoor />}
                    </div>}
            </div>
        </header>
    )
}

export default Nav