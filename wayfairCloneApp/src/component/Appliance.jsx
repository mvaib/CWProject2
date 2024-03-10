import { Link } from "react-router-dom"

function Appliance({img,title,link}){

    return(
        <Link>
            <div className="applianceCard">
                <div className="applianceImg">
                    <img src={img} alt="" />
                </div>
                <p className="applianceTitle">{title}</p>
            </div>
        </Link>
    )
}

export default Appliance