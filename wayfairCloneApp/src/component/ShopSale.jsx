function ShopSale({img,title,discription}){
    return(
        <div className="subShopSaleCont">
            <div className="shopSaleImg">
                <img src={img} alt="" />
            </div>
            <p className="shopSaleTitle">{title}</p>
            <p className="shopSaleDiscription">{discription}</p>
        </div>
    )
}
export default ShopSale