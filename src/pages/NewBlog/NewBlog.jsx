import './NewBlog.css';
import {useForm} from 'react-hook-form';
import InputField from "../../components/InputField/InputField.jsx";
import Button from "../../components/Button/Button.jsx";
import calculateReadTime from "../../helpers/calculateReadTime.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function NewBlog() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        const blogData = {
            "title": data.title,
            "subtitle": data.subTitle,
            "content": data.blogPost.substring(0, 100) + "...",
            "author": data.author,
            "created": new Date().toISOString(),
            "readTime": calculateReadTime(data.blogPost),
            "comments": 0,
            "shares": 0
        };

        const order = ["title", "subtitle", "content", "author", "created", "readTime", "comments", "shares"];
        console.log(JSON.stringify(Object.fromEntries(order.map(key => [key, blogData[key]])), null, 2));

        toast("Je blog is gepost, yay!", {autoClose: 3000, position: "top-center"});
        setTimeout(() => navigate("/overview"), 1000);
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
        </>
    )
}

export default NewBlog;