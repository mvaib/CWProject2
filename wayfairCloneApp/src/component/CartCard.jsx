function CartCard({img,title}){

    return(
        <>
            <div className="cartCard">
                <div className="cartImg">
                    <img  src={img} alt="" />
                </div>
                <p className="cartTitle">{title}</p>
            </div>
        </>
    )
}

export default CartCard