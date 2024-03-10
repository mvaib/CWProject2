import FooterImage from "./FooterImage"
import { Link } from "react-router-dom"
function Footer(){
    return(
        <footer>
            <FooterImage url={"https://assets.wfcdn.com/im/41096071/resize-h524-w2880%5Ecompr-r85/2703/270368544/a-home-screen-worthy_experience._exclusive_deals_%26_perks_on_the_app._download_now.__270368544.jpg"}/>

            <div className="footerDiv2">
                <div className="cont">
                    <div className="about">
                        <h2>About Us</h2>
                        <Link>About Wayfair</Link>
                        <Link>Wayfair Professional</Link>
                        <Link>Gift Cards</Link>
                        <Link>Wayfair Credit Card</Link>
                        <Link>Wayfair Financing"</Link>
                        <Link>Careers</Link>
                        <Link>Sell on Wayfair</Link>
                        <Link>Investor Relations</Link>
                        <Link>Advertise With Us</Link>
                        <Link>Locations</Link>
                    </div>
                    <div className="customerService">
                        <h2>Customer Service</h2>
                        <Link>My Orders</Link>
                        <Link>My Account</Link>
                        <Link>Track My Order</Link>
                        <Link>Wayfair Accessibility Statement</Link>
                        <Link>Return Policy</Link>
                        <Link>Help Center</Link>
                        <Link>Product Recalls</Link>
                    </div>
                    <div className="contactUs">
                        <h2>Contact Us</h2>
                        <button className="quickHelp">
                        <i className="fa-regular fa-clock"></i>
                        <p>Quick Help</p>
                        </button>
                        <button className="callUs">
                        <i className="fa-solid fa-phone"></i>
                        <p>Call Us</p>
                        </button>
                        <div className="CustomerService">
                            <h3>Customer Servivce</h3>
                            <h4> Closed. Opens 8:00 AM</h4>
                            <h4>Mon - Fri: 8:00 AM - 11:59 PM</h4>
                            <h4>Sat: 8:00 AM - 8:00 PM</h4>
                            <h4>Sun: 9:00 AM - 6:00 PM</h4>
                            <h4>All times Eastern</h4>
                        </div>
                        <div className="shoppingAssistance">
                            <h3>Shopping Assistance</h3>
                            <h4>Closed. Opens 8:00 AM</h4>
                            <h4>Mon - Fri: 8:00 AM - 11:55 PM</h4>
                            <h4>Sat: 8:00 AM - 8:00 PM</h4>
                            <h4>Sun: 9:00 AM - 6:00 PM</h4>
                            <h4>All times Eastern</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerDiv3">
                <div className="footerDiv3cont">
                    <div className="brands">
                        <Link>JOSS & MAIN</Link>
                        <Link>ALL MODERN</Link>
                        <Link>BIRCH LN</Link>
                    </div>
                    <div className="socialIcon">
                        <Link target="_blank" to="https://twitter.com/Wayfair">
                            <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link target="_blank" to="https://www.facebook.com/wayfair/">
                            <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link target="_blank" to="https://in.pinterest.com/wayfair/">
                            <i className="fa-brands fa-pinterest-p"></i>
                        </Link>
                        <Link to="https://www.instagram.com/wayfair/">
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                    </div>
                    <div className="terms">
                        <Link>Terms of Use</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Your Privacy Rights & Choices</Link>
                    </div>
                    <div className="copyright">© 2002 - 2024 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116</div>
                </div>
            </div>
        </footer>
    )
}
export default Footer