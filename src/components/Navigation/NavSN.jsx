import React from 'react';
import s from './NavSN.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const NavSN = (props) => {
    return (
        <nav className={s.navClass}>
            <div>
                <NavLink to="/main" className={s.item} activeClassName={s.activeLink}>Home</NavLink>
            </div>
            <div>
                <NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" className={s.item} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={s.item} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div>
                <NavLink to="/users" className={s.item + ' ' + s.friendsBar}
                         activeClassName={s.activeLink}>Users <Sidebar store={props.store.sidebarData}/> </NavLink>
            </div>
        </nav>
    );
}

export default NavSN;