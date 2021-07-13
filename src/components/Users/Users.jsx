import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../asets/images/user_avatar.png'
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.large != null ? u.photos.large : userPhoto} alt='user img'
                         className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button
                            disabled={props.followInProgress.some(id => id === u.id)}
                            onClick={() => {props.unFollow(u.id)}}>Unsubscribe</button>
                        : <button
                            disabled={props.followInProgress.some(id => id === u.id)}
                            onClick={() => {props.follow(u.id)}}>Subscribe</button>}
                            </div>
                            </span>
                    <span>
                            <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
                        {/*<span>*/}
                        {/*    <div>{"u.location.country"}</div>*/}
                        {/*    <div>{"u.location.city"}</div>*/}
                        {/*</span>*/}
                            </span>
                </div>)
            }
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage} onClick={() => {
                        props.onPageChanged(p)
                    }}>{p + ', '}</span>
                })}
            </div>
        </div>
    )
}

export default Users;