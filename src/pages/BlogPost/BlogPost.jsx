import './BlogPost.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import blogs from "../../constants/data.json";
import clock from "../../assets/clock.svg";
import formatDate from "../../helpers/formatDate.js";
import {useEffect, useState} from "react";
import axios from "axios";

function BlogPost() {

    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchBlog(){
            try {
                const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`,
                    {
                        headers: {
                            "novi-education-project-id": "dba8566a-9dd8-4a2a-b717-eaaae3e286b4",
                        },
                    });
                setBlog(response.data);
            } catch (e) {
                navigate("/error");
            } finally {
                setLoading(false);
            }
        }
        fetchBlog();
    }, [id]);

    if (loading) {
        return <p>Blog wordt geladen...</p>
    }

    return (
        <section className="blog-wrapper">
            <h1>{blog.title}</h1>
            <h2>{blog.subtitle}</h2>
            <h3>Geschreven door {blog.author} op {formatDate(blog.created)}</h3>
            <div className="reading-time-wrapper">
                <img className="clock-icon" src={clock} alt="clock-icon"/>
                <p className="reading-time">{blog.readTime} minuten lezen</p>
            </div>
            <p>{blog.content}</p>
            <p>{blog.comments} reacties - {blog.shares} keer gedeeld</p>
            <Link className="links" to="/overview">&lt; Terug naar de overzichtspagina</Link>
        </section>
    )
}

export default BlogPost;