import "./NavLinkItem.css";
import {NavLink} from "react-router-dom";

function NavLinkItem({to, title}) {
    return (
        <li>
            <NavLink className={({isActive}) => isActive ? "nav-item-active" : "nav-item-default"} to={to}>{title}</NavLink>
        </li>
    )
}

export default NavLinkItem;