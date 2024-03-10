import { Link } from "react-router-dom"
import "./SideBar.css"
function SideBar({visible,setSideBarVisible}){
    return(
        <div className="SideBar" value={visible}>
            <div className="Div1">
                <i id="close" onClick={()=>setSideBarVisible(false)} className="fa-solid fa-x"></i>
                <div className="Logo">
                    wayfair
                </div>
            </div>
            <div className="Div2">
                <Link to="/" onClick={()=>setSideBarVisible(false)}>
                    <div>
                    <   i className="fa-solid fa-house"></i>
                        <p>Home</p>
                    </div></Link>
                <Link>
                    <div>
                        <i className="fa-solid fa-box"></i>    
                        <p>My order</p>
                    </div>
                </Link>
            </div>
            <Link to="/saving" onClick={()=>setSideBarVisible(false)}>
                <div className="Div3">
                    <i className="fa-solid fa-percent"></i>
                    <p>Daily Sale</p>
                </div>
            </Link>
            
        </div>
    )
}
export default SideBar