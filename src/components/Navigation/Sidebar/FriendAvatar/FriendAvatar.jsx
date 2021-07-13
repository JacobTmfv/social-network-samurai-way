import React from 'react';
import s from './FriendAvatar.module.css'

const FriendAvatar = (props) => {
    return (

            <span className={s.fBarAvatars}><img src={props.data} alt=""/>
              </span>
    )
}

export default FriendAvatar;