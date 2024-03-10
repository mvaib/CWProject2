import { Link } from "react-router-dom"

function ExclusiveBrand({img,discription,link}){

    return(
        <Link to={link}>
            <div className="exclusiveCard">
                <div className="exclusiveImg">
                    <img src={img} alt="" />
                </div>
                <p className="exclusiveDis">{discription}</p>
            </div>
        </Link>
    )
}

export default ExclusiveBrand