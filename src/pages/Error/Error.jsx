import './Error.css';
import {Link} from "react-router-dom";

function Error() {
    return (
        <>
            <h2>De blog die je zoekt, konden we niet vinden :(</h2>
            <Link className="links" to="/overview">&lt; Terug naar de overzichtspagina</Link>
        </>
    )
}

export default Error;