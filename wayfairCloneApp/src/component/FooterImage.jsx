function FooterImage({url}){
    return(
        <div className="image">
            <div className="imageDiv1">
                <img src={url} alt="" />
            </div>
            <div className="imageDiv2">
                <p>Be the first to know about our best deals!</p>
                <div>
                    <input type="text" placeholder="Email address"/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
        
    )
}
export default FooterImage