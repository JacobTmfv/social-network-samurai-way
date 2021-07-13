import React from 'react';
import s from './Sidebar.module.css'
import FriendAvatar from "./FriendAvatar/FriendAvatar";

const Sidebar = (props) => {
    let sidebarMapping = props.store.map(sidebarEl => <FriendAvatar data={sidebarEl.imgUrl}/>);
    return (
        <div className={s.fBarAvatarsBlock}>
            {sidebarMapping}
        </div>
    )
}

export default Sidebar;