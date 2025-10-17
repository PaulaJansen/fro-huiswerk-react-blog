import './App.css';
import logo from './assets/logo-white.png';
import menuLogo from './assets/logo-medium.png';
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import OverviewBlogs from './pages/OverviewBlogs/OverviewBlogs.jsx';
import NewBlog from './pages/NewBlog/NewBlog.jsx';
import Error from './pages/Error/Error.jsx';
import BlogPost from "./pages/BlogPost/BlogPost.jsx";

function App() {
    return (
        <div className="page-container">
            <nav className="navbar">
                <img className="navbar-image" src={menuLogo} alt="Company logo"/>
                <ul className="navbar-menu">
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-item-active" : "nav-item-default"} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-item-active" : "nav-item-default"} to="/overview">Overview blogs</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-item-active" : "nav-item-default"} to="/new-blog">New blog</NavLink>
                    </li>
                </ul>
            </nav>
            <img className="logo" src={logo} alt="Company logo"/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/overview" element={<OverviewBlogs/>}/>
                <Route path="/new-blog" element={<NewBlog/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="/blogpost/:id" element={<BlogPost/>}/>
            </Routes>
        </div>
    )
}

export default App
