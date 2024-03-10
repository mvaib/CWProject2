import { Link } from "react-router-dom"

function BedRoomBasic({img,title,discription,Itag,link}){

    return(
        <Link>
            <div className="basicCard">
                <div className="basicImg">
                    <img src={img} alt="" />
                </div>
                <p className="basicTitle">{title}</p>
                <div>
                    <p>{discription}</p>
                    <i className={Itag}></i>
                </div>
            </div>
        </Link>
    )
}

export default BedRoomBasic