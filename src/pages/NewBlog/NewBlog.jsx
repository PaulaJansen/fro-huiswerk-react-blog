import './NewBlog.css';
import {useForm} from 'react-hook-form';
import InputField from "../../components/InputField/InputField.jsx";
import Button from "../../components/Button/Button.jsx";
import calculateReadTime from "../../helpers/calculateReadTime.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import axios from "axios";

function NewBlog() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function handleFormSubmit(data) {
            try {
                const createBlog = await axios.post("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts", {
                    "title": "",
                    "subtitle": "",
                    "author": "",
                    "blogpost": ""
                }, {
                    headers: {
                        "novi-education-project-id": "dba8566a-9dd8-4a2a-b717-eaaae3e286b4",
                    }
                });
                const order = ["title", "subtitle", "content", "author", "created", "readTime", "comments", "shares"];
                console.log(JSON.stringify(Object.fromEntries(order.map(key => [key, blogData[key]])), null, 2));

                toast("Je blog is gepost, yay!", {autoClose: 3000, position: "top-center"});
                setTimeout(() => navigate("/overview"), 1000);
            } catch (e) {
                setError("Er is iets mis gegaan, probeer het opnieuw!");
            } finally {
                setLoading(false);
            }
        }
    });
}

if (loading) {
    return <p>Blogs worden geladen...</p>;
}


return (
    <>
        <h2>Nieuwe blogpost</h2>
        <form className="form-wrapper" onSubmit={handleSubmit(handleFormSubmit)}>
            <InputField
                label="Titel"
                name="title"
                type="text"
                register={register}
                errors={errors}
            />
            <InputField
                label="Ondertitel"
                name="subTitle"
                type="text"
                register={register}
                errors={errors}
            />
            <InputField
                label="Naam en achternaam"
                name="author"
                type="text"
                register={register}
                errors={errors}
            />
            <InputField
                label="Blogpost"
                name="blogPost"
                as="textarea"
                register={register}
                errors={errors}
            />
            <Button type="submit" className="button-primary" label="Toevoegen"/>
        </form>
        <p>{error}</p>
    </>
);
}

export default NewBlog;