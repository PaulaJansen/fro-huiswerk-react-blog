import './App.css';
import menuLogo from './assets/logo-medium.png';
import footerLogo from './assets/logo-small.png';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import OverviewBlogs from './pages/OverviewBlogs/OverviewBlogs.jsx';
import NewBlog from './pages/NewBlog/NewBlog.jsx';
import Error from './pages/Error/Error.jsx';
import BlogPost from "./pages/BlogPost/BlogPost.jsx";
import NavLinkItem from "./components/NavLink/NavLinkItem.jsx";
import {ToastContainer} from "react-toastify";
import BlogPosted from "./pages/BlogPosted/BlogPosted.jsx";

function App() {
    return (
        <div className="page-container">
            <nav className="navbar">
                <img className="navbar-image" src={menuLogo} alt="Company logo"/>
                <ul className="navbar-menu">
                        <NavLinkItem to={"/"} title="Home" />
                        <NavLinkItem to={"/overview"} title="Alle blogs" />
                        <NavLinkItem to={"/new-blog"} title="Nieuwe blog" />
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/overview" element={<OverviewBlogs/>}/>
                <Route path="/new-blog" element={<NewBlog/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="/blogpost/:id" element={<BlogPost/>}/>
                <Route path="/new-blog-posted/:id" element={<BlogPosted/>}/>
            </Routes>
            <ToastContainer/>
            <footer className="footer">
                <img src={footerLogo} alt="Logo" className="footer-logo"/>
            </footer>
        </div>
    )
}

export default App
