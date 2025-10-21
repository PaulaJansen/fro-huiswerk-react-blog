import './BlogPost.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import blogs from "../../constants/data.json";
import clock from "../../assets/clock.svg";
import formatDate from "../../helpers/formatDate.js";
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "../../components/Button/Button.jsx";
import {toast} from "react-toastify";
import Spinner from "../../components/Spinner/Spinner.jsx";

function BlogPost() {

    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const [loadingBlog, setLoadingBlog] = useState(true);
    const [loadingDelete, setLoadingDelete] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBlog() {
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
                setLoadingBlog(false);
            }
        }

        fetchBlog();
    }, [id]);

    async function deleteBlog() {
        setLoadingDelete(true);
        try {
            await axios.delete(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`, {
                headers: {
                    "novi-education-project-id": "dba8566a-9dd8-4a2a-b717-eaaae3e286b4"
                }
            });

            toast("Je blog is verwijderd!", {autoClose: 3000, position: "top-center"});
            navigate("/overview");
        } catch (e) {
            setError("Er is iets mis gegaan bij het verwijderen van de blogpost.");
        } finally {
            setLoadingDelete(false)
        }
    }

    if (loadingBlog) {
        return <p>Blog wordt geladen...</p>
    }

    if (loadingDelete) {
        return <p>Blog wordt verwijderd...</p>
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
            <Button type="button"
                    label="Verwijder blog"
                    className="button-secondary"
                    onClick={deleteBlog}
                    disabled={loadingDelete}
            />
            {error && <p className="error-message">{error}</p>}
        </section>
    )
}

export default BlogPost;