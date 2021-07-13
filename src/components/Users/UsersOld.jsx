import React from 'react';
import styles from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../asets/images/user_avatar.png'

const UsersOld = (props) => {
    let getUsers = () => {
        if (props.store.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger;
                props.setUsers(response.data.items);
            });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.store.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.large != null ? u.photos.large : userPhoto} alt='user img' className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followStatus
                        ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}
export default UsersOld;