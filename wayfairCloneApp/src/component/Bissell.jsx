import { Link } from "react-router-dom"

function Bissell({img,discription,Itag,link}){

    return(
        <Link>
            <div className="bissellCard">
                <div className="bissellImg">
                    <img src={img} alt="" />
                </div>
                <div>
                    <p className="bissellDis">{discription}</p>
                    <i className={Itag}></i>
                </div>
            </div>
        </Link>
    )
}

export default Bissell