function ShippingAndService({img,title}){

    return(
        <div className="shippingAndServiceCard">
            <div className="shippingAndServiceImg">
                <img src={img} alt="" />
            </div>
            <p className="shippingAndServiceTitle">{title}</p>
        </div>
    )
}

export default ShippingAndService