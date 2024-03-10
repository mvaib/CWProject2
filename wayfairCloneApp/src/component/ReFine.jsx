import { Link } from "react-router-dom"

function ReFine({img,title,discription,Itag,link}){

    return(
        <Link>
            <div className="reFineCard">
                <div className="reFineImg">
                    <img src={img} alt="" />
                </div>
                <p className="reFineTitle">{title}</p>
                <div>
                    <p>{discription}</p>
                    <i className={Itag}></i>
                </div>
            </div>
        </Link>
    )
}

export default ReFine