import './NewBlog.css';
import {useForm} from 'react-hook-form';
import InputField from "../../components/InputField/InputField.jsx";
import Button from "../../components/Button/Button.jsx";
import calculateReadTime from "../../helpers/calculateReadTime.js";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {useEffect, useState} from "react";
import Spinner from "../../components/Spinner/Spinner.jsx";

function NewBlog() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [submittedData, setSubmittedData] = useState(null);
    const navigate = useNavigate();

    async function handleFormSubmit(data) {
        setLoading(true);
        setError(null);

        console.log(data)

        try {
            const createBlog = await axios.post("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts", {
                "title": data.title,
                "subtitle": data.subtitle,
                "content": data.blogpost,
                "created": new Date().toISOString(),
                "author": data.author,
                "readTime": calculateReadTime(data.blogpost),
                "comments": 0,
                "shares": 0,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "novi-education-project-id": "dba8566a-9dd8-4a2a-b717-eaaae3e286b4",
                }
            });

            if (createBlog.status === 200 || createBlog.status === 201) {
                setSuccess(createBlog.data);
                setSubmittedData(data);
            } else {
                setError("Er is iets misgegaan, probeer het opnieuw!");
            }
        } catch (e) {
            setError("Er is iets mis gegaan bij het versturen van de blogpost.");
            console.error(e.response?.data);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (success) {
            toast("Je blog is gepost, yay!", {autoClose: 3000, position: "top-center"});
        }
    }, [success]);

    if (success && submittedData) {
        // Voor het evt loggen van de data in de console:

        // const blogData = {
        //     "title": submittedData.title,
        //     "subtitle": submittedData.subtitle,
        //     "content": submittedData.blogpost,
        //     "author": submittedData.author,
        //     "created": new Date().toISOString(),
        //     "readTime": calculateReadTime(submittedData.blogpost),
        //     "comments": 1,
        //     "shares": 2,
        // };
        //
        // const order = ["title", "subtitle", "content", "author", "created", "readTime", "comments", "shares"];
        // console.log(JSON.stringify(Object.fromEntries(order.map(key => [key, blogData[key]])), null, 2));

        return navigate(`/new-blog-posted/${success.id}`, { state: { title: success.title } });
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
                    name="subtitle"
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
                    name="blogpost"
                    as="textarea"
                    register={register}
                    errors={errors}
                />
                <Button type="submit"
                        className="button-primary"
                        label={loading ? (
                            <>
                                <Spinner className="spinner-small"/> Verzenden...
                            </>
                        ) : (
                            "Toevoegen"
                        )}
                        disabled={loading}
                />
            </form>
            {error && <p className="error-message">{error}</p>}
        </>
    );
}

export default NewBlog;