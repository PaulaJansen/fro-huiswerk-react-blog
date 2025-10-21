import './OverviewBlogs.css';
import blogs from '../../constants/data.json';
import OverviewCard from "../../components/OverviewCard/OverviewCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function OverviewBlogs() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await axios.get( "https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts",
                    {
                        headers: {
                            "novi-education-project-id": "dba8566a-9dd8-4a2a-b717-eaaae3e286b4",
                        },
                    });
                setBlogs(response.data);
                console.log(response.data);
            } catch(e) {
                setError("Blogs ophalen mislukt :(");
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    if (loading) {
        return <p>Blogs worden geladen...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (blogs.length === 0) {
        return <p>Er zijn nog geen blogs beschikbaar!</p>
    }

    return (
        <>
            <h2>Bekijk alle {blogs.length} blogs</h2>
            <section className="overview-wrapper">
                {blogs.map((blog) => (
                    <OverviewCard
                        key={blog.id}
                        title={blog.title}
                        author={blog.author}
                        responses={blog.comments}
                        shares={blog.shares}
                        id={blog.id}
                    />
                ))}
            </section>
        </>

    )
}

export default OverviewBlogs;