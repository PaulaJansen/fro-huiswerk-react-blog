import './Home.css';
import logo from "../../assets/logo-white.png";

// Deel 2 opdracht 1 uitgegrijsd:

import Button from "../../components/Button/Button.jsx";
import axios from "axios";

// async function fetchBlogs() {
//     try {
//         const result = await axios.get("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts", {
//             headers: {
//                 "novi-education-project-id": "dba8566a-9dd8-4a2a-b717-eaaae3e286b4"
//             }
//         });
//         console.log(result.data);
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function fetchOneBlog() {
//     try {
//         const result = await axios.get("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/6", {
//             headers: {
//                 "novi-education-project-id": "dba8566a-9dd8-4a2a-b717-eaaae3e286b4"
//             }
//         });
//         console.log(result.data);
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function createBlog() {
//     try {
//         const result = await axios.post("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts", {
//             "title": "Wat gebruiker heeft ingevuld",
//             "subtitle": "Wat gebruiker heeft ingevuld",
//             "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
//             "author": "Voornaam achternaam",
//             "created": "2023-09-21T09:30:00Z",
//             "readTime": 1,
//             "comments": 0,
//             "shares": 0
//         }, {
//             headers: {
//                 "novi-education-project-id": "dba8566a-9dd8-4a2a-b717-eaaae3e286b4"
//             }
//         });
//         console.log("Succes!");
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function deleteBlog() {
//     try {
//         const result = await axios.delete("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/18", {
//             headers: {
//                 "novi-education-project-id": "dba8566a-9dd8-4a2a-b717-eaaae3e286b4"
//             }
//         });
//         console.log("Succes!");
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function updateBlog() {
//     try {
//         const result = await axios.put("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/1", {
//             "id" : 1,
//             "title": "De Smaken van de laars van Europa",
//             "subtitle": "Een culinaire reis door Bella Italia",
//             "content": "Italië, het land van heerlijke pasta, pizza en gelato, is een culinair paradijs dat elke fijnproever moet ervaren. In deze blog nemen we je mee op een smakelijke reis door Bella Italia. Ontdek de geheimen achter de perfecte risotto, leer hoe je zelfgemaakte pasta maakt en proef de verrukkelijke regionale gerechten van Noord tot Zuid. Bereid je voor om je smaakpapillen te verwennen in de keuken van de laarsvormige natie.",
//             "created": "2023-09-21T09:30:00Z",
//             "author": "Anna de Kok",
//             "readTime": 5,
//             "comments": 12,
//             "shares": 8
//         }, {
//             headers: {
//                 "Content-type": "application/json",
//                 "novi-education-project-id": "dba8566a-9dd8-4a2a-b717-eaaae3e286b4"
//             }
//         })
//         console.log("Succes!");
//     } catch (e) {
//         console.error(e);
//     }
// }

    function Home() {
        return (
            <>
                <div className="home-wrapper">
                    <img className="logo" src={logo} alt="Company logo"/>
                </div>
                {/*<section className="form-temporary">*/}
                {/*    <Button className="button-primary"*/}
                {/*            type="button"*/}
                {/*            label="Alle posts"*/}
                {/*            onClick={fetchBlogs}*/}
                {/*    />*/}
                {/*    <Button className="button-primary"*/}
                {/*            type="button"*/}
                {/*            label="1 post"*/}
                {/*            onClick={fetchOneBlog}*/}
                {/*    />*/}
                {/*    <Button className="button-primary"*/}
                {/*            type="button"*/}
                {/*            label="Nieuwe post"*/}
                {/*            onClick={createBlog}*/}
                {/*    />*/}
                {/*    <Button className="button-primary"*/}
                {/*            type="button"*/}
                {/*            label="Delete post"*/}
                {/*            onClick={deleteBlog}*/}
                {/*    />*/}
                {/*    <Button className="button-primary"*/}
                {/*            type="button"*/}
                {/*            label="Update post"*/}
                {/*            onClick={updateBlog}*/}
                {/*    />*/}
                {/*</section>*/}
            </>
        )
    }

    export default Home;