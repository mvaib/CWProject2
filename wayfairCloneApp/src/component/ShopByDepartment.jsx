import { Link } from "react-router-dom"

function ShopByDepartment({img,title,link}){

    return(
        <Link>
            <div className="shopByDepartmentCard">
                <div className="shopByDepartmentImg">
                    <img src={img} alt="" />
                </div>
                <p className="shopByDepartmentTitle">{title}</p>
            </div>
        </Link>
    )
}

export default ShopByDepartment