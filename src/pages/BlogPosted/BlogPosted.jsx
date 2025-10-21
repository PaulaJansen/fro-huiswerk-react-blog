import "./BlogPosted.css";
import {Link, useLocation, useParams} from "react-router-dom";

function BlogPosted() {

    const { id }  = useParams();
    const location = useLocation();
    const title = location.state?.title;

    return (
        <div className="blog-posted">
            <h2>Je blog is succesvol toegevoegd!</h2>
            <p>Je bekijkt hem hier {" "}
                <Link className="links" to={`/blogpost/${id}`} >{">> "}{title}</Link>
            </p>
        </div>
    )
}

export default BlogPosted;