import './Home.css';
import logo from "../../assets/logo-white.png";

function Home() {
    return (
        <div className="home-wrapper">
            <img className="logo" src={logo} alt="Company logo"/>
        </div>
    )
}

export default Home;