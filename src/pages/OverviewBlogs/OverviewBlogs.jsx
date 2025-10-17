import './OverviewBlogs.css';
import blogs from '../../constants/data.json';
import OverviewCard from "../../components/OverviewCard/OverviewCard.jsx";

function OverviewBlogs() {

    return (
        <>
            <h1>Bekijk alle {blogs.length} blogs</h1>
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