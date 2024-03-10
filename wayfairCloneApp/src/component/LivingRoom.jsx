import { Link } from "react-router-dom"

function LivingRoom({img,title,link}){

    return(
        <Link>
            <div className="livingCard">
                <div className="livingImg">
                    <img src={img} alt="" />
                </div>
                <p className="livingTitle">{title}</p>
            </div>
        </Link>
    )
}

export default LivingRoom