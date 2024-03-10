import { Link } from "react-router-dom"

function Video({url}){
    return(
        <Link to="/saving">
            <div>
                <video autoPlay loop muted controls={false} width="100%" height="100%">
                    <source src={url} type="video/webm" />
                </video>
            </div>
        </Link>

    )
}

export default Video