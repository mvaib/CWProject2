import { Link } from "react-router-dom";

function CartFooter(){
    return(
        <footer className="CartFooter">
            <div>
                <Link>Site Feedback</Link>|
                <Link>Privacy</Link>|
                <Link>Terms of Use</Link>|
                <Link>Interest-Based Ads</Link>|
                <p>© 2024, Wayfair</p>
            </div>
        </footer>
    )
}
export default CartFooter