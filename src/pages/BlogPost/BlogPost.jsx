import './BlogPost.css';
import {Link, useParams} from "react-router-dom";
import blogs from "../../constants/data.json";
import clock from "../../assets/clock.svg";
import formatDate from "../../helpers/formatDate.js";

function BlogPost() {

    const {id} = useParams();
    const blogId = parseInt(id);
    const currentBlog = blogs[blogId - 1];

    if (!currentBlog) {
        return <Link to={"/error"}/>;
    }

    return (
        <section className="blog-wrapper">
            <h1>{currentBlog.title}</h1>
            <h2>{currentBlog.subtitle}</h2>
            <h3>Geschreven door {currentBlog.author} op {formatDate(currentBlog.created)}</h3>
            <div className="reading-time-wrapper">
                <img className="clock-icon" src={clock} alt="clock-icon"/>
                <p className="reading-time">{currentBlog.readTime} minuten lezen</p>
            </div>
            <p>{currentBlog.content}</p>
            <p>{currentBlog.comments} reacties - {currentBlog.shares} keer gedeeld</p>
            <Link className="links" to="/overview">&lt; Terug naar de overzichtspagina</Link>
        </section>
    )
}

export default BlogPost;